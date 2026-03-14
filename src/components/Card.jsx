import React from "react";
import CardData from "./CardData.jsx";
import cardData from "./cardData.js";

function Card() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Popular Courses</h2>
          <p className="text-gray-500 mt-2">
            Learn new skills from expert instructors
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((course) => (
            <CardData  course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
