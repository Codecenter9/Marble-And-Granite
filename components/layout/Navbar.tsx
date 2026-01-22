"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronRight
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/galleries", label: "Galleries" },
    { href: "/faq", label: "FAQ" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-gray-900/50 backdrop-blur-2xl border-b border-transparent
        `}
    >

      <nav className="max-w-7xl mx-auto px-8 sm:px-16 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="font-bold text-xl tracking-wide"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className={`bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-white`}>
              Marble
            </span>
          </Link>
        </motion.div>

        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <motion.li key={link.href} whileHover={{ y: -2 }}>
              <Link
                href={link.href}
                className={`transition-colors duration-300 relative group 
                  text-white hover:text-gray-300
                  `}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white`}></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.div
            className="hidden sm:block"
          >
            <Link
              href="/contact"
              className={`flex items-center gap-2 px-6 py-2.5 text-sm rounded-md font-medium transition-all duration-300 
              bg-pink-500 text-white hover:bg-pink-600
                `}
            >
              <Phone size={16} />
              Get in touch
            </Link>
          </motion.div>

          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden cursor-pointer p-2.5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={24} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={24} className={`hover:text-gray-300 text-white`} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200
              }}
              className="fixed top-0 right-0 h-full w-3/4 bg-white border-l border-gray-200 shadow-2xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-8">
                  <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 cursor-pointer rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-gray-900" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-row justify-between items-center p-2 rounded-lg text-lg font-medium text-gray-900 hover:bg-gray-200 transition-all duration-300 group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.label}
                        </span>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          <ChevronRight size={16} className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: navLinks.length * 0.1 + 0.2,
                    duration: 0.3
                  }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 px-3 py-2 rounded-lg text-lg font-medium bg-pink-600 text-white hover:bg-pink-500 transition-all duration-300"
                  >
                    <Phone size={20} />
                    Get in touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;