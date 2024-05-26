// src/components/CarbonReductionPage.js
import React from 'react';

const CarbonReductionPage = () => {
  const tips = [
    { title: "Use Energy-Efficient Appliances", description: "Switch to energy-efficient appliances to reduce your household energy consumption and save on utility bills." },
    { title: "Install Solar Panels", description: "Consider installing solar panels to generate your own renewable energy and reduce reliance on fossil fuels." },
    { title: "Reduce Water Usage", description: "Fix leaks, install low-flow fixtures, and use water-saving appliances to conserve water and reduce energy used in water heating." },
    { title: "Insulate Your Home", description: "Proper insulation can significantly reduce the amount of energy needed for heating and cooling your home." },
    { title: "Use Public Transportation", description: "Reduce your carbon footprint by using public transportation, carpooling, biking, or walking whenever possible." },
    { title: "Recycle and Compost", description: "Reduce waste by recycling and composting organic materials to decrease the amount of waste sent to landfills." },
    { title: "Plant Trees", description: "Planting trees around your home can help absorb CO2 and provide shade, reducing the need for air conditioning." },
    { title: "Use LED Lighting", description: "Replace incandescent bulbs with LED lights, which use less energy and have a longer lifespan." },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Ways to Reduce Carbon Emissions at Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">{tip.title}</h2>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarbonReductionPage;
