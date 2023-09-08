import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi Everyone, I am Vaibhav from karnataka, India.

        I am seeking my first
        professional opportunity as software engineer in
        a dynamic and innovative organization that
        values creativity and growth. With a solid
        foundation of skills and a hunger for knowledge,
        I aim to contribute to the success of the
        organization while continuously developing my
        own career. I bring a strong work ethic,
        excellent problem-solving abilities, and a
        collaborative mindset, ready to tackle new
        challenges and make a meaningful impact.

        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
