import LandingPage from '@/components/common/LandingPage'
import React from 'react'

const About = () => {
    return (
        <section className='relative overflow-hidden bg-white'>
            <div className="relative mb-5">
                <LandingPage
                    title="Gallery"
                    description="Explore our exquisite collection of marble and granite masterpieces."
                />
            </div>
        </section>
    )
}

export default About
