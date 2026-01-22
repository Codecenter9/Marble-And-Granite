"use client"

import SectionTitle from '@/components/layout/SectionTitle'
import React, { useState } from 'react'
import Image from 'next/image'

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All')

    const galleryImages = [
        { id: 1, src: '/images/gallery/image (1).webp', alt: 'Marble design 1', category: "Marble" },
        { id: 2, src: '/images/gallery/image (2).webp', alt: 'Marble design 2', category: "Granite" },
        { id: 3, src: '/images/gallery/image (3).webp', alt: 'Granite design 1', category: "Marble" },
        { id: 4, src: '/images/gallery/image (4).webp', alt: 'Granite design 2', category: "Installation" },
        { id: 5, src: '/images/gallery/image (5).webp', alt: 'Marble installation', category: "Granite" },
        { id: 6, src: '/images/gallery/image (6).webp', alt: 'Granite design 3', category: "Installation" },
        { id: 7, src: '/images/gallery/image (7).webp', alt: 'Granite design 2', category: "Marble" },
        { id: 8, src: '/images/gallery/image (8).webp', alt: 'Marble installation', category: "Granite" },
    ]

    const filteredImages = activeFilter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeFilter)

    const filterButtons = [
        { label: 'All', value: 'All' },
        { label: 'Marble', value: 'Marble' },
        { label: 'Granite', value: 'Granite' },
        { label: 'Installation', value: 'Installation' },
    ]

    return (
        <section className="relative z-10 bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="relative">
                <SectionTitle
                    subtitle="Gallery"
                    title="Gallery of Our Marble & Granite"
                    description="Explore our exquisite collection of marble and granite masterpieces."
                    align="left"
                />
            </div>

            <div className="mt-12">
                <div className="flex flex-wrap gap-3 mb-10">
                    {filterButtons.map((filter) => (
                        <button
                            type='button'
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-3 py-0.5 rounded-lg font-medium transition-all duration-300 ${activeFilter === filter.value
                                ? 'bg-gray-900/90 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-72 w-full overflow-hidden rounded-xl">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <span className="absolute to-0 left-0 px-3 py-0.5 bg-pink-500 rounded-md text-white">{image.category}</span>

                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-br from-pink-400/0 via-cyan-400/0 to-pink-400/0 group-hover:via-cyan-400/20 group-hover:to-pink-400/10 transition-all duration-1000"></div>

                                    <div className="absolute inset-0 bg-linear-to-br from-pink-300/0 via-cyan-300/0 to-pink-300/0 group-hover:from-pink-300/10 group-hover:via-cyan-300/15 group-hover:to-pink-300/10 transition-all duration-700"></div>
                                </div>

                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-300/50 transition-all duration-500 rounded-xl"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 via-black/60 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                                <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                                <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Premium quality with natural patterns
                                </p>
                            </div>


                            <div className="absolute top-4 right-4 w-10 h-10 bg-linear-to-br from-pink-400/20 to-cyan-400/20 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-pink-100 to-cyan-100 rounded-full mb-6">
                            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No images found</h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                )}
            </div>

            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-linear-to-br from-pink-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-pink-100/10 to-cyan-100/10 rounded-full blur-3xl"></div>
        </section>
    )
}

export default Gallery