"use client"

import { notFound } from 'next/navigation'
import Image from 'next/image'
import {
    ArrowLeft,
    CheckCircle,
    Ruler,
    Shield,
    Truck,
    Clock,
    Package,
    MessageCircle,
    Phone
} from 'lucide-react'
import Link from 'next/link'
import { productsData } from '@/data/products'
import { use } from 'react'
import CTA from '@/components/ui/sections/CTA'

type ProductDetailPageProps = {
    params: Promise<{ productdetail: string }>
}

// Flatten all products to find by slug
const getAllProducts = () => {
    const allProducts: any[] = []
    Object.values(productsData).forEach(category => {
        allProducts.push(...category)
    })
    return allProducts
}

// Get category name from product
const getCategoryFromProduct = (slug: string) => {
    if (slug.includes('marble')) return 'Marble'
    if (slug.includes('granite')) return 'Granite'
    if (slug.includes('onyx')) return 'Onyx'
    if (slug.includes('quartze')) return 'Quartzite'
    return 'Stone'
}

// Get related products (same category)
const getRelatedProducts = (currentProduct: any, count: number = 4) => {
    const category = getCategoryFromProduct(currentProduct.slug).toLowerCase()
    const related = productsData[category as keyof typeof productsData] || []
    return related
        .filter(product => product.id !== currentProduct.id)
        .slice(0, count)
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { productdetail } = use(params);
    const allProducts = getAllProducts()
    const product = allProducts.find(p => p.slug === productdetail)


    if (!product) {
        notFound()
    }

    const category = getCategoryFromProduct(product.slug)
    const relatedProducts = getRelatedProducts(product)

    return (
        <section className="min-h-screen bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex flex-col flex-2">
                        <div>
                            <div className="relative h-125 rounded-sm overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                    priority
                                />
                                <div className="absolute top-4 left-4 px-4 py-0.5 bg-pink-500 backdrop-blur-sm rounded-full">
                                    <span className="font-medium text-gray-100">{category}</span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className="my-6">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    {product.title}
                                </h1>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                    <Ruler className="w-5 h-5 text-gray-600" />
                                    <div>
                                        <p className="text-sm text-gray-500">Thickness</p>
                                        <p className="font-medium text-gray-900">18-30 mm</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                    <Shield className="w-5 h-5 text-gray-600" />
                                    <div>
                                        <p className="text-sm text-gray-500">Warranty</p>
                                        <p className="font-medium text-gray-900">10 Years</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                    <Truck className="w-5 h-5 text-gray-600" />
                                    <div>
                                        <p className="text-sm text-gray-500">Delivery</p>
                                        <p className="font-medium text-gray-900">5-7 Days</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                    <Clock className="w-5 h-5 text-gray-600" />
                                    <div>
                                        <p className="text-sm text-gray-500">Installation</p>
                                        <p className="font-medium text-gray-900">2-3 Days</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                                <div className="space-y-3">
                                    {product.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Best Applications</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications.map((application: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium"
                                        >
                                            {application}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="mt-16 pt-12 border-t border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Specifications</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="space-y-4 col-span-2 border border-gray-300 px-6 py-3 rounded-md">
                                    <h3 className="text-lg font-semibold text-gray-900">Physical Properties</h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between py-2 border-b border-gray-300">
                                            <span className="text-gray-600">Density</span>
                                            <span className="font-medium">2.5 - 2.8 g/cm³</span>
                                        </li>
                                        <li className="flex justify-between py-2 border-b border-gray-300">
                                            <span className="text-gray-600">Water Absorption</span>
                                            <span className="font-medium">0.1 - 0.5%</span>
                                        </li>
                                        <li className="flex justify-between py-2 border-b border-gray-300">
                                            <span className="text-gray-600">Compressive Strength</span>
                                            <span className="font-medium">80 - 150 MPa</span>
                                        </li>
                                        <li className="flex justify-between py-2 border-b border-gray-300">
                                            <span className="text-gray-600">Hardness (Mohs)</span>
                                            <span className="font-medium">3 - 4</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4 col-span-1">
                                    <h3 className="text-lg font-semibold text-gray-900">Maintenance Guide</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <Package className="w-5 h-5 text-gray-600 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-gray-900">Cleaning</p>
                                                <p className="text-gray-600 text-sm">Use pH-neutral cleaners only. Avoid acidic substances.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Shield className="w-5 h-5 text-gray-600 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-gray-900">Sealing</p>
                                                <p className="text-gray-600 text-sm">Recommended every 6-12 months for optimal protection.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-gray-600 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-gray-900">Polishing</p>
                                                <p className="text-gray-600 text-sm">Professional polishing recommended annually.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1">
                        {relatedProducts.length > 0 && (
                            <div className="">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Related {category} Products</h2>
                                <div className="flex flex-col gap-3">
                                    {relatedProducts.map((related: any) => (
                                        <Link
                                            key={related.id}
                                            href={`/products/${related.slug}`}
                                            className="group"
                                        >
                                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
                                                <div className="flex flex-row gap-3">
                                                    <div className="flex relative h-24 w-full flex-1 overflow-hidden">
                                                        <Image
                                                            src={related.image}
                                                            alt={related.title}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div className="flex flex-2 items-center">
                                                        <span className="py-3">
                                                            <h3 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                                                                {related.title}
                                                            </h3>
                                                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                                                {related.description}
                                                            </p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <CTA />
        </section>
    );
}