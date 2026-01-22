"use client";

import React from "react";
import { TextAnimate } from "../ui/text-animate";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    description?: string;
    className?: string;
    subtitleClass?: string;
    titleClass?: string;
    descriptionClass?: string;
    showSubtitleLines?: boolean;
    subtitleLineColor?: string;
    accentColor?: string;
    align?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    description,
    className = "",
    subtitleClass = "",
    titleClass = "",
    descriptionClass = "",
    subtitleLineColor = "bg-pink-500",
    accentColor = "bg-gradient-to-r from-pink-500 to-rose-500",
    align = "left",
}) => {
    const alignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };

    return (
        <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
            {subtitle && (
                <div className={`flex items-center gap-2 w-full`}>

                    <div className={`w-3 h-0.5 ${subtitleLineColor}`} />

                    <div className="relative shrink-0">
                        <TextAnimate animation="blurInUp" by="character" once className={`text-sm md:text-base font-semibold tracking-widest uppercase text-gray-500 ${subtitleClass}`}
                        >
                            {subtitle}
                        </TextAnimate>

                        <div className={`absolute -bottom-1 left-0 h-0.5 ${accentColor} w-0 group-hover:w-full transition-all duration-700`} />
                    </div>
                    <div className={`w-3 h-0.5 ${subtitleLineColor}`} />

                </div>
            )}

            <div className="relative ">
                <TextAnimate animation="blurInUp" by="character" once className={`text-2xl md:text-3xl font-bold tracking-tight leading-tight ${titleClass}`}
                >
                    {title}
                </TextAnimate>

                <div className={`absolute -z-10 -inset-4 ${accentColor} opacity-5 blur-3xl`} />
            </div>

            {description && (
                <div className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
                    <TextAnimate animation="blurInUp" by="character" once className={`text-base md:text-lg text-gray-600 leading-relaxed ${descriptionClass}`}

                    >
                        {description}
                    </TextAnimate>
                </div>
            )}
        </div>
    );
};

export default SectionTitle;