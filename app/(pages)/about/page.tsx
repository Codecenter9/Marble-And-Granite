"use client"
import LandingPage from '@/components/common/LandingPage'
import Counters from '@/components/ui/cards/Counters'
import { motion, Variants } from 'framer-motion';
import React from 'react'

const About = () => {
    const services = [
        {
            title: "Granite Supply",
            items: [
                "Import & sourcing from certified quarries",
                "Wholesale & retail distribution",
                "Custom slab sizing",
                "Bulk supply for construction projects",
            ],
        },
        {
            title: "Marble Solutions",
            items: [
                "Premium marble selection",
                "Residential & commercial supply",
                "Cut-to-size marble slabs",
                "Polishing & finishing services",
            ],
        },
        {
            title: "Installation & Custom Work",
            items: [
                "Professional installation",
                "Kitchen countertops",
                "Flooring & wall cladding",
                "Custom design consultation",
            ],
        },
    ];

    const features = [
        {
            title: "Premium Materials",
            desc: "Only top-grade granite and marble sourced from trusted quarries."
        },
        {
            title: "Expert Craftsmanship",
            desc: "Precision cutting, polishing, and installation by skilled professionals."
        },
        {
            title: "Custom Solutions",
            desc: "Tailored designs for residential, commercial, and luxury projects."
        },
        {
            title: "Reliable Delivery",
            desc: "On-time supply and installation without compromising quality."
        },
    ]

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
        <section className="relative overflow-hidden bg-white">
            <div className="relative mb-10">
                <LandingPage
                    title="About Dorraekka"
                    description="Crafting timeless elegance with premium granite and marble for modern and classic spaces."
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-20">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-10 items-start"
                >
                    <motion.div variants={item} className="md:w-2/3 text-gray-700 leading-relaxed text-lg space-y-4">
                        <p>
                            <strong className="text-gray-900">Dorraekka Granite & Marble</strong> is a trusted name in
                            premium natural stone solutions, specializing in high-quality marble, granite, and
                            quartzite sourced from the finest quarries.
                        </p>
                        <p>
                            With years of experience in stone selection, processing, and installation, we help
                            homeowners, architects, and developers transform spaces into timeless works of art.
                        </p>
                        <p>
                            Our commitment to craftsmanship, durability, and aesthetic excellence ensures every
                            project reflects elegance, strength, and lasting value.
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="md:w-1/3">
                        <Counters className='grid grid-cols-2' />
                    </motion.div>
                </motion.div>

            </div>

            <div className="max-w-7xl mx-auto bg-gray-50 px-6 md:px-12 lg:px-24 py-12 md:py-24 space-y-4">
                <motion.h2
                    variants={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900 mb-8 text-start"
                >
                    Why Choose Dorraekka
                </motion.h2>


                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="rounded-xl group border border-gray-200 hover:shadow-sm bg-white p-6 transition-all duration-300"
                        >
                            <h3 className="font-semibold text-pink-900 group-hover:text-blue-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24 space-y-4">
                <motion.h2
                    variants={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900 text-start"
                >
                    Services
                </motion.h2>


                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="rounded-xl group border border-gray-200 bg-white p-6 hover:shadow-sm transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-pink-900 group-hover:text-blue-900 mb-4 border-b border-pink-500 group-hover:border-blue-500 pb-2">
                                {service.title}
                            </h3>

                            <ul className="space-y-3">
                                {service.items.map((listItem, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                        <span className="mt-1 h-4 w-4 flex items-center justify-center rounded border border-gray-400">
                                            <span className="h-2 w-2 bg-gray-500 rounded-sm"></span>
                                        </span>
                                        <span>{listItem}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </section >
    )
}

export default About
