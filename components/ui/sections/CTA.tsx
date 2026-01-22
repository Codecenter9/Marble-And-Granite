'use client'

import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import React from "react";

const CTA = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="
                    relative overflow-hidden
                    mx-auto
                     bg-gray-900
                    px-6 md:px-12 lg:px-24 py-16
                    text-white
                    rounded-md
                "
            >
                <span className="absolute -top-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                <span className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Transform Your Space with
                            <span className="block">Premium Marble & Granite</span>
                        </h2>
                        <p className="mt-4 text-white/90">
                            Discover timeless elegance and expert craftsmanship.
                            Let us help you create spaces that inspire and endure.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">

                        <Button href="#contact" variant="secondary" label="Get a Free Quote" />

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+000000000"
                            className="
                                inline-flex items-center justify-center gap-2
                                rounded-full
                                border border-white
                                px-8 py-4
                                font-semibold
                                text-white
                            "
                        >
                            <PhoneCall size={18} />
                            Call Us
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
