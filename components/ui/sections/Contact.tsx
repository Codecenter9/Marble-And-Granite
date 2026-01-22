import SectionTitle from '@/components/layout/SectionTitle'
import React from 'react'
import { Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className="relative z-10 bg-gray-50 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          title="Get in Touch with Dorra Ekka Marble"
          subtitle="Contact Us"
          description="Reach out to us for premium marble and granite solutions. Our team is ready to assist you with your project needs."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          <div className="space-y-8">
            <div className=" overflow-hidden h-125">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0567337034076!2d38.72198977359686!3d8.966919891091967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81003564d3e1%3A0xc9185fe53bcecfb0!2sDORRA%20EKKA%20GRANITE%20%26%20MARBLE%20PLC!5e0!3m2!1sen!2set!4v1769062820111!5m2!1sen!2set" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          <div className="bg-white p-8 rounded-md border border-gray-200">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg transition-all duration-300 group-hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="John Doe"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-focus-within:w-full transition-all duration-500"></div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg transition-all duration-300 group-hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="+91 98765 43210"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-focus-within:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg transition-all duration-300 group-hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="john@example.com"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg transition-all duration-300 group-hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-0"
                  >
                    <option value="">Select a subject</option>
                    <option value="marble">Marble Inquiry</option>
                    <option value="granite">Granite Inquiry</option>
                    <option value="installation">Installation Service</option>
                    <option value="quotation">Price Quotation</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg transition-all duration-300 group-hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-pink-700 to-pink-800 text-white py-4 px-6 rounded-lg font-semibold hover:from-pink-800 hover:to-pink-900 transition-all duration-300 transform flex items-center justify-center gap-3 group"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>

            </form>

            <div className="flex flex-col lg:hidden mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Immediate Assistance?</h3>
              <div className="flex items-center justify-left gap-6">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call Now</span>
                </a>
                <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact