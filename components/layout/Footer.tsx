"use client"
import Link from 'next/link'
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
    Home,
    User,
    Briefcase,
    Images,
    Package,
    PhoneCall,
    Heart,
    ChevronUp
} from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Dorra Ekka Marble</h2>
                                <p className="text-amber-400 text-sm font-medium">Premium Stone Solutions</p>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                            We provide premium quality marble and granite solutions with unparalleled craftsmanship.
                            Transform your spaces with our exquisite collection of natural stones.
                        </p>

                        <div className="flex items-center space-x-4 pt-4">
                            <a title='facebook' href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a title='instagram' href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a title='twitter' href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a title='linkedin' href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a title='message' href="https://wa.me/919876543210" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b-2 border-amber-600 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <Home className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <User className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <Briefcase className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <Images className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <Package className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <PhoneCall className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                    </div>


                    <div >
                        <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b-2 border-amber-600 inline-block">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 cursor-pointer text-gray-300 rounded-sm text-sm">Marble Installation</span>
                            <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 cursor-pointer text-gray-300 rounded-sm text-sm">Granite Supply</span>
                            <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 cursor-pointer text-gray-300 rounded-sm text-sm">Custom Designs</span>
                            <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 cursor-pointer text-gray-300 rounded-sm text-sm">Maintenance</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b-2 border-amber-600 inline-block">Contact Info</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 bg-gray-800 group-hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Our Location</h4>
                                    <p className="text-gray-300 text-sm">
                                        Jemo Michael, Addis Ababa, Ethiopia
                                    </p>
                                </div>
                            </div>

                            <div className="flex lg:hidden items-start gap-4 group">
                                <div className="w-10 h-10 bg-gray-800 group-hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Phone Numbers</h4>
                                    <div className="space-y-1">
                                        <a href="tel:+919876543210" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 block text-sm">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 bg-gray-800 group-hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Email Address</h4>
                                    <div className="space-y-1">
                                        <a href="mailto:info@dorraekkamarble.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 block text-sm">
                                            info@dorraekkamarble.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 bg-gray-800 group-hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                                    <p className="text-gray-300 text-sm">
                                        Mon - Sat: 9:00 AM - 8:00 PM<br />
                                        Sunday: 10:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            <p>&copy; {currentYear} Dorra Ekka Marble. All rights reserved.</p>
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                                Terms of Service
                            </Link>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>Designed with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            <span>by Meskot Digitals</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer