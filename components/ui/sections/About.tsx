"use client";

import SectionTitle from "@/components/layout/SectionTitle";
import Image from "next/image";
import Counters from "../cards/Counters";
import { motion, Variants } from "framer-motion";
import Button from "@/components/common/Button";

const About = () => {

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
        <section className="relative z-10 bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="relative">
                <SectionTitle
                    title="About Our Marble & Granite"
                    subtitle="Our Story"
                    align="left"
                />
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start relative">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-8">
                    <div className="space-y-3">
                        <motion.p variants={item} className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            We provide premium quality marble and granite, crafted with
                            precision and elegance. Our products elevate both modern
                            and classic spaces with timeless natural beauty.
                        </motion.p>

                        <motion.p variants={item} className="text-gray-600 leading-relaxed">
                            With years of experience and a deep respect for natural
                            materials, we focus on durability, aesthetics, and
                            exceptional finishing in every product we deliver.
                        </motion.p>

                        <motion.div variants={item} className=" max-w-max">
                            <Button href="/about" size="sm" className="rounded-md" label="Read More" />
                        </motion.div>
                    </div>

                    <motion.div variants={item}>
                        <Counters />
                    </motion.div>

                </motion.div>

                <motion.div
                    variants={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="relative h-75 md:h-100 w-full overflow-hidden rounded-sm shadow-2xl shadow-gray-200/50">
                        <div className="absolute inset-0 bg-linear-to-tr from-pink-500/10 to-transparent z-10 mix-blend-overlay"></div>
                        <Image
                            src="/images/marble.webp"
                            alt="Premium Marble"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                    </div>

                    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-4 py-2.5 border-l-4 border-pink-500 z-30 group-hover:-translate-y-2 transition-transform duration-300">
                        <p className="text-sm font-semibold text-gray-800">Premium Quality</p>
                        <p className="text-xs text-gray-500">Natural Stone</p>
                    </div>

                </motion.div>
            </div>
        </section >
    );
};

export default About;