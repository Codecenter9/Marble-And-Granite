"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // in ms
  duration?: number; // in seconds
  splitType?: "chars" | "words" | "lines";
  from?: { opacity: number; y: number };
  to?: { opacity: number; y: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  onLetterAnimationComplete?: () => void;
}

type TextElement = {
  id: number;
  content: string;
  type: "char" | "word" | "line";
  hasSpace?: boolean;
};

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag: Tag = "div",
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const getSplitElements = useCallback((): TextElement[] => {
    if (!text) return [];

    if (splitType === "chars") {
      return text.split("").map((char, index) => ({
        id: index,
        content: char === " " ? "\u00A0" : char,
        type: "char",
      }));
    } else if (splitType === "words") {
      const words = text.split(" ");
      return words.map((word, index) => ({
        id: index,
        content: word,
        type: "word",
        hasSpace: index !== words.length - 1,
      }));
    } else {
      return [{ id: 0, content: text, type: "line" }];
    }
  }, [text, splitType]);

  const elements = getSplitElements();

  useEffect(() => {
    if (hasAnimated || !containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setTimeout(() => {
              onLetterAnimationComplete?.();
              setHasAnimated(true);
            }, elements.length * delay + duration * 1000);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, hasAnimated, elements.length, delay, duration, onLetterAnimationComplete]);

  const getAnimationStyle = (index: number) => {
    if (!isVisible) {
      return {
        opacity: from.opacity,
        transform: `translateY(${from.y}px)`,
        transition: "none",
      };
    }

    return {
      opacity: to.opacity,
      transform: `translateY(${to.y}px)`,
      transition: `opacity ${duration}s cubic-bezier(0.19, 1, 0.22, 1), transform ${duration}s cubic-bezier(0.19, 1, 0.22, 1) ${index * (delay / 1000)}s`,
    };
  };

  const renderContent = () => {
    if (splitType === "chars") {
      return elements.map((element, index) => (
        <span
          key={`char-${element.id}`}
          className="inline-block"
          style={getAnimationStyle(index)}
          aria-hidden="true"
        >
          {element.content}
        </span>
      ));
    } else if (splitType === "words") {
      return elements.map((element, index) => (
        <span key={`word-${element.id}`} className="inline-block">
          <span
            className="inline-block"
            style={getAnimationStyle(index)}
            aria-hidden="true"
          >
            {element.content}
          </span>
          {element.hasSpace && "\u00A0"}
        </span>
      ));
    } else {
      const lines = text.split("\n").filter(line => line.trim());
      return lines.map((line, lineIndex) => (
        <div
          key={`line-${lineIndex}`}
          className="block overflow-hidden"
          style={getAnimationStyle(lineIndex)}
        >
          {line}
        </div>
      ));
    }
  };

  const DynamicTag = Tag as any;

  return (
    <DynamicTag
      ref={containerRef}
      className={className}
      style={{
        textAlign,
        overflow: "hidden",
        display: splitType === "lines" ? "block" : "inline-block",
        lineHeight: splitType === "chars" ? "1" : "inherit"
      }}
      aria-label={text}
    >
      {renderContent()}
    </DynamicTag>
  );
};

export default SplitText;