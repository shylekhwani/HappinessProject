import React from 'react';
import bgImg from "../assets/bgimg.jpg";

const AboutUs = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-start p-10 text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 p-8 rounded-lg max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Welcome to <span className="text-yellow-400 font-bold">HappinessPlans</span> – your trusted travel companion!
          <br /><br />
          We are passionate about helping explorers discover new destinations, experience different cultures, and create lifelong memories.
          Our mission is to make travel planning seamless and enjoyable for everyone.
          <br /><br />
          Whether you're looking for serene beaches, majestic mountains, or vibrant cities, <span className="text-yellow-400 font-bold">HappinessPlans</span> is here to guide you on your journey.
          Let's explore the world together!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
