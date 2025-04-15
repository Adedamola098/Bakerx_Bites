import React from 'react';
import { Service } from './Data/Index';

const Services = () => {
  return (
    <>
      <div className="text-center py-10">
        <h1 className="text-3xl md:text-4xl font-bold font-serif drop-shadow-sm text-yellow-400">Our Services</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-14">
        {Service.map((service, index) => (
          <div
            key={index}
            className="bg-white text-center px-6 py-8 w-full max-w-sm mx-auto shadow-md rounded-xl"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h1 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-2">
              {service.name}
            </h1>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
