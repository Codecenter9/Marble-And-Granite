"use client"
import LandingPage from '@/components/common/LandingPage'
import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight, Sparkles } from 'lucide-react';
import { productsData } from '@/data/products';
import Link from 'next/link';

const Products = () => {
  const [activeTab, setActiveTab] = useState<'marble' | 'granite' | 'onyx' | 'quartzite'>('marble');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const categories = [
    { id: 'marble', name: 'Marble', count: 6 },
    { id: 'granite', name: 'Granite', count: 6 },
    { id: 'onyx', name: 'Onyx', count: 4 },
    { id: 'quartzite', name: 'Quartzite', count: 4 },
  ];


  const products = productsData[activeTab];

  return (
    <section className='relative overflow-hidden bg-white'>
      <div className="relative mb-5">
        <LandingPage
          title="Our Premium Stone Collection"
          description="Discover our exquisite range of natural stones, each piece selected for its unique beauty, durability, and timeless elegance."
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-wrap justify-left gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              type='button'
              key={category.id}
              onClick={() => setActiveTab(category.id as any)}
              className={`px-3 w-max py-0.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-
                ${activeTab === category.id
                  ? 'bg-linear-to-r from-gray-900 to-gray-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name}
              <span className={`ml-3 hidden md:flex px-2 py-0.5 text-xs rounded-full ${activeTab === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-300 text-gray-700'
                }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-start max-w-3xl"
        >
          <motion.p variants={item} className="text-gray-600 text-lg">
            {activeTab === 'marble' && "Timeless elegance with natural veining patterns, perfect for creating luxurious and sophisticated spaces."}
            {activeTab === 'granite' && "Extreme durability and strength, ideal for high-traffic areas and surfaces requiring maximum resistance."}
            {activeTab === 'onyx' && "Translucent beauty that glows when backlit, creating dramatic and artistic lighting effects."}
            {activeTab === 'quartzite' && "Marble's beauty meets granite's strength - the perfect combination of aesthetics and durability."}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{
                y: -3,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500 backdrop-blur-sm rounded-full text-sm font-medium text-gray-50">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-800 cursor-pointer transition-colors duration-300">
                    <Link href={`/products/${product.slug}`}>
                      {product.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 flex-1">
                    {product.description}
                  </p>


                  <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                    <Link href={`/products/${product.slug}`} className="cursor-pointer inline-flex items-center text-sm font-medium text-pink-600 group-hover:text-pink-500 transition-colors duration-300">
                      View Details
                      <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}

export default Products