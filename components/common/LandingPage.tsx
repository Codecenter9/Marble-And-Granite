import React from "react";

type SectionLandingPageProps = {
    title: string;
    description?: string;
    image?: string; // background image path
};

const LandingPage: React.FC<SectionLandingPageProps> = ({
    title,
    description,
    image = "/images/landingImage.webp",
}) => {
    return (
        <section
            className="relative px-6 md:px-12 lg:px-24 h-[60vh] min-h-105 w-full flex items-center"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 w-full">
                <div className="container mx-auto">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                            {title}
                        </h1>

                        {description && (
                            <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
