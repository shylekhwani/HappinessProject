import React from 'react';
import servicesBg from "../assets/service.png";

const Services = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${servicesBg})`,
      }}
    >
      <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center p-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          What We Do
        </h2>
        <p className="max-w-2xl text-center mb-10 text-lg">
          At <span className="text-yellow-400 font-bold">HappinessPlans</span>, we design memorable travel experiences.  
          Whether you're planning a weekend getaway or a luxury tour, we take care of everything!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition">
            <h3 className="text-2xl font-semibold mb-4">Custom Tour Packages</h3>
            <p>Get personalized itineraries based on your preferences—whether it's beaches, hills, or cultural tours.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition">
            <h3 className="text-2xl font-semibold mb-4">Hotel & Stay Booking</h3>
            <p>We collaborate with top hotels to provide the best accommodation deals for a comfortable stay.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition">
            <h3 className="text-2xl font-semibold mb-4">Travel Assistance</h3>
            <p>From transport to guides, we assist you throughout your journey to make your travel seamless.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
