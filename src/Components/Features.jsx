import React from 'react';
import { FaCheckCircle, FaHandshake, FaWrench, FaCogs } from 'react-icons/fa';

const Features = () => {
    const infoCards = [
        {
            icon: <FaCheckCircle className="text-3xl text-[#0a2540]" />,
            title: "AI",
            description: "Strategic AI integration designed for your business challenges, utilizing predictive analytics for smarter decisions and improved operational speed."
        },
        {
            icon: <FaHandshake className="text-3xl text-[#0a2540]" />,
            title: "Web Development",
            description: "Custom websites tailored to your business needs, built with the latest technologies for a seamless and engaging user experience."
        },
        {
            icon: <FaWrench className="text-3xl text-[#0a2540]" />,
            title: "Mobile App Development",
            description: "WDeveloping intuitive mobile apps that deliver powerful functionality and exceptional user interfaces on both Android and iOS platforms."
        },
        {
            icon: <FaCogs className="text-3xl text-[#0a2540]" />,
            title: "UI/UX Design",
            description: "Crafting intuitive and engaging interfaces that prioritize user experience, ensuring a seamless interaction with your digital products."
        }
    ];

    return (
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540]">
                     UIX Tech Labs - Innovation Through UI, Impact Through UX
                </h2>
                <p className="text-base md:text-lg text-gray-600 mt-2 mb-12">
                    Tailored Tech Services for Your Needs
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-8 rounded-lg flex flex-col items-center"
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-lg font-bold text-[#0a2540] mb-2">{card.title}</h3>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
