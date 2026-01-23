"use client"

import { motion, Variants } from "framer-motion";
import LandingPage from '@/components/common/LandingPage'
import { Accordion, AccordionItem } from "@heroui/accordion"

const FAQ = () => {

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

  const faqs = [
    {
      question: 'What is Dorra Ekka Marble?',
      answer: 'Dorra Ekka Marble is a premium supplier of natural stone products, specializing in high-quality marble and granite for various applications including residential and commercial projects. With over 25 years of experience, we provide expert craftsmanship and exceptional customer service.'
    },
    {
      question: 'Where are your quarries located?',
      answer: 'Our quarries are strategically located in regions known for their rich deposits of marble and granite, including Rajasthan, Gujarat, and Andhra Pradesh. We also source premium quality imported marble from Italy, Spain, and Turkey to ensure we offer the finest materials.'
    },
    {
      question: 'Do you offer custom cutting and finishing services?',
      answer: 'Yes, we provide custom cutting, shaping, and finishing services to meet the specific needs of our clients. Our state-of-the-art workshop is equipped with advanced machinery for precise cutting, polishing, and edge detailing to ensure each piece fits perfectly within your design vision.'
    },
    {
      question: 'What types of marble and granite do you offer?',
      answer: 'We offer a wide variety of marble types including Carrara, Calacatta, Statuario, Makrana, Udaipur Green, and more. For granite, we have Black Galaxy, Absolute Black, Kashmir White, Tan Brown, and many other premium varieties. Each stone has unique colors and veining patterns to suit different aesthetic preferences.'
    },
    {
      question: 'How can I request a quote for my project?',
      answer: 'You can request a quote by contacting us through our website, phone, or by visiting our showroom. Provide us with the details of your project including measurements, preferred stone type, and design requirements, and our team will provide a detailed quotation within 24 hours.'
    },
    {
      question: 'What is the installation process?',
      answer: 'Our installation process includes: 1) Site inspection and measurements, 2) Material selection and approval, 3) Fabrication at our workshop, 4) Professional installation by experienced technicians, and 5) Final inspection and polishing. We ensure minimal disruption to your daily routine.'
    },
    {
      question: 'How do I maintain marble surfaces?',
      answer: 'For marble maintenance, use pH-neutral cleaners, wipe spills immediately, avoid acidic substances (lemon, vinegar), use coasters under glasses, and reseal periodically (every 6-12 months). We also offer maintenance packages for regular upkeep of your marble surfaces.'
    },
    {
      question: 'What is the delivery timeline?',
      answer: 'Delivery timeline depends on the project scope. Standard kitchen countertops take 5-7 days, bathroom vanities 3-5 days, and larger projects like flooring may take 2-3 weeks. We provide clear timelines during the quotation process and keep you updated throughout.'
    },
    {
      question: 'Do you provide warranty?',
      answer: 'Yes, we provide a comprehensive warranty including: 1-year warranty on installation workmanship, 10-year warranty against material defects (varies by stone type), and lifetime support for maintenance advice. All warranty terms are documented in our contract.'
    },
    {
      question: 'Can you match existing marble patterns?',
      answer: 'Yes, we can match existing marble patterns for renovation or extension projects. Bring us a sample or photo of your existing marble, and our experts will help you find the closest match from our extensive collection.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Hyderabad and surrounding areas including Secunderabad, Gachibowli, HITEC City, Banjara Hills, and Jubilee Hills. We also undertake projects in major cities across Telangana and Andhra Pradesh.'
    },
    {
      question: 'Do you offer free consultation?',
      answer: 'Yes, we offer free consultation including site visits, measurements, and design advice. Our experts will visit your location, understand your requirements, and provide professional recommendations without any obligation.'
    },
    {
      question: 'What makes Dorra Ekka Marble different from others?',
      answer: 'Our 25+ years of expertise, direct quarry sourcing, state-of-the-art fabrication technology, skilled artisans, transparent pricing, and exceptional after-sales service make us the preferred choice for premium marble and granite solutions.'
    }
  ]

  return (
    <section className='relative overflow-hidden bg-gray-50'>
      <LandingPage
        title='Frequently Asked Questions'
        description='Find answers to common questions about our marble and granite services'
      />
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div variants={item} key={index} className="bg-gray-300 cursor-pointer rounded-md">
              <Accordion variant="splitted">
                <AccordionItem className='text-start' key="1" aria-label={faq.question} title={faq.question}>
                  {faq.answer}
                </AccordionItem>

              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center">
          <motion.h3 variants={item} className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </motion.h3>
          <motion.p variants={item} className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can not find the answer you are looking for? Our team is ready to help you with any specific questions about marble, granite, or your project.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-linear-to-br from-gray-100 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-linear-to-tr from-gray-100 to-transparent rounded-full blur-3xl -z-10"></div>
    </section>
  )
}

export default FAQ