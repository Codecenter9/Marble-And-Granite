"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import SplitText from "../../SplitText";
import Button from "@/components/common/Button";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

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
        <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={() => videoRef.current?.pause()}
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/videos/background-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-linear-to-r from-gray-950/90 via-gray-950/80 to-gray-950/40" />

            <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-24">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl space-y-5 text-white"
                >
                    <motion.div variants={item} className="flex flex-col gap-3">
                        <SplitText
                            text="Dorra Ekka Marble & Granite"
                            className="text-base text-pink-500 font-semibold"
                            delay={50}
                            duration={1.25}
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="left"
                        />

                        <SplitText
                            text="A PERFECT BLEND OF STRENGTH & BEAUTY"
                            className="font-playfair text-4xl lg:text-5xl font-bold italic leading-tight tracking-tight"
                            delay={50}
                            duration={1.25}
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="left"
                        />

                    </motion.div>

                    <motion.p variants={item} className="font-body text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                        Timeless elegance crafted from the finest marble and granite,
                        designed to elevate modern and classic spaces with natural beauty.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-8">
                        <Button href="/products" size="md" className="rounded-md" label="Explore Products" />

                        <Button href="/contact" size="md" variant="outline" className="rounded-md text-white hover:text-gray-950" label="Get a Quote" />

                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
        </section>
    );
}
