"use client"

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/layout/SectionTitle';

const Products = () => {
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const item: Variants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                scale: {
                    type: "spring",
                    stiffness: 100
                }
            },
        },
    };


    const features = [
        {
            image: "/images/marble.webp",
            title: "High-Quality Materials",
            description: "We source only the finest marble and granite to ensure durability and aesthetic appeal.",
        },
        {
            image: "/images/marble.webp",
            title: "Expert Craftsmanship",
            description: "Our skilled artisans bring years of experience to every project, ensuring precision and excellence.",
        },
        {
            image: "/images/marble.webp",
            title: "Custom Designs",
            description: "We offer tailored solutions to meet your unique design preferences and project requirements.",
        },
        {
            image: "/images/marble.webp",
            title: "Sustainable Practices",
            description: "We are committed to environmentally friendly practices in sourcing and production.",
        },
        {
            image: "/images/marble.webp",
            title: "Sustainable Practices",
            description: "We are committed to environmentally friendly practices in sourcing and production.",
        },
    ];

    return (
        <section className="relative z-10 bg-gray-50 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="relative mb-5">
                <SectionTitle
                    subtitle="Our Products"
                    title="Premium Quality & Excellence"
                    description="Crafted from the finest natural stone, our products combine timeless beauty, exceptional durability, and expert craftsmanship to elevate every space."
                    align="left"
                />

            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{
                            y: -8,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }
                        }}
                        className="relative group h-full"
                    >

                        <div className={`relative h-full bg-white rounded-xl border border-gray-300 overflow-hidden transition-all duration-500 z-10 flex flex-col`}>

                            <div className="relative h-56 w-full overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 z-20" />

                                <motion.div
                                    className="relative h-full w-full"
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        priority={index < 2}
                                    />
                                </motion.div>

                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-3  cursor-pointer mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 hover:text-pink-800 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 flex-1">
                                    {feature.description}
                                </p>

                                <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300 cursor-pointer">
                                    <span className="inline-flex items-center text-sm font-medium text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
                                        Learn more
                                        <svg
                                            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default Products;