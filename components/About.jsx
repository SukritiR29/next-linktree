import React from "react";

export default function About() {
  return (
    <section className="w-11/12  md:w-8/12 lg:w-1/3 flex mx-auto items-center justify-between bg-gray-500/30 p-6 py-4 rounded-xl backdrop-blur-[2px]">
      <div className="text-left">
        <p className="text-3xl font-bold underline underline-offset-8 mb-4">
          About
        </p>
        <p>
        I'm a third year engineering undergrad in Information Technology. 
        I'm a Web Developer and a UI/UX designer with experience in React, Python, JavaScript, 
        Data Structures and SQL. I've worked as a Software Engineering Intern at MiniOrange and 
        have been a finalist in the Smart India Hackathon'22.
        Apart from that a big book worm and an animal lover.
        </p>
      </div>
    </section>
  );
}
