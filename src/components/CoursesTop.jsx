import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function CoursesTop() {
 const slides = [
    {
      id: 1,
      title: "Launch your career in AI engineering",
      desc: "Learn from Microsoft experts",
      btn: "Start Learning",
      img: "https://images.unsplash.com/photo-1581093588401-22f21d1e3c4e"
    },
    {
      id: 2,
      title: "Start, switch, or advance your career",
      desc: "Grow with courses from top organizations",
      btn: "Join for Free",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      id: 3,
      title: "Become a Full Stack Developer",
      desc: "Master modern web technologies",
      btn: "Explore Courses",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-3 pb-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Slider */}
        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* Left Card */}
          <div className="bg-blue-900 text-white rounded-3xl p-10 relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-4">
              {slides[current].title}
            </h2>

            <p className="mb-6 text-gray-200">
              {slides[current].desc}
            </p>

            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold">
              {slides[current].btn}
            </button>
          </div>

          {/* Right Image */}
          <div className="bg-gray-200 rounded-3xl overflow-hidden">
            <img
              src={slides[current].img}
              className="w-full h-\[300px] object-cover"
            />
          </div>

        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-6 rounded-full ${
                current === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CoursesTop
