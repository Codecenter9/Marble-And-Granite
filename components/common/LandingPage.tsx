import { motion, Variants } from "framer-motion";
import React from "react";

type SectionLandingPageProps = {
    title: string;
    description?: string;
    image?: string; // background image path
};

const LandingPage: React.FC<SectionLandingPageProps> = ({
    title,
    description,
    image = "/images/landingImage.webp",
}) => {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.14,
                delayChildren: 0.25,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section
            className="relative px-6 md:px-12 lg:px-24 h-[60vh] min-h-105 w-full flex items-center"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 w-full">
                <div className="container mx-auto">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl text-left">
                        <motion.h1 variants={item} className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                            {title}
                        </motion.h1>

                        {description && (
                            <motion.p variants={item} className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
                                {description}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
