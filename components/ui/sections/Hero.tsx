"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/common/Button";
import { TextAnimate } from "../text-animate";

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
                        <TextAnimate animation="blurInUp" by="character" once className="tracking-[0.35em] uppercase text-sm text-pink-500 font-semibold opacity-90"

                        >
                            Dorra Ekka Marble & Granite
                        </TextAnimate>

                        <TextAnimate animation="blurInUp" by="character" once className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[0.15rem]"
                        >
                            A PERFECT BLEND OF
                        </TextAnimate>
                        <TextAnimate animation="blurInUp" by="character" once className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[0.15rem]"
                        >
                            STRENGTH & BEAUTY
                        </TextAnimate>

                    </motion.div>

                    <motion.p variants={item} className="font-body text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                        <TextAnimate animation="blurInUp" by="character" once
                        >
                            Timeless elegance crafted from the finest marble and granite,
                            designed to elevate modern and classic spaces with natural beauty
                        </TextAnimate>

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
