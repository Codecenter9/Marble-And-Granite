import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    showArrow?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    href,
    onClick,
    variant = "primary",
    size = "md",
    showArrow = true,
    className = "",
    type = "button",
    disabled = false,
}) => {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold group overflow-hidden transition-all duration-300 ease-out focus:outline-none";

    const variantStyles: Record<ButtonVariant, string> = {
        primary: "bg-pink-500 text-white hover:bg-pink-600",
        secondary: "bg-white text-pink-600",
        outline: "border border-pink-600 text-pink-600 hover:bg-pink-50",
    };

    const sizeStyles: Record<ButtonSize, string> = {
        sm: "px-5 py-2.5 text-sm",
        md: "px-8 py-4 text-base",
        lg: "px-10 py-5 text-lg",
    };

    const disabledStyles = disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "";

    const classes = `
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabledStyles}
        ${className}
    `;

    const content = (
        <>
            <span className="transition-transform duration-300 items-center ease-out group-hover:-translate-x-1">
                {label}
            </span>

            {showArrow && (
                <ChevronRight
                    size={18}
                    className="
                        opacity-0 -translate-x-2
                        transition-all duration-300 ease-out
                        group-hover:opacity-100 group-hover:translate-x-1
                    "
                />
            )}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {content}
        </button>
    );
};

export default Button;
