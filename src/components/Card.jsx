import React from 'react'
import CardData from './CardData';
function Card() {
  const cardData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      category: "Web Development",
      title: "React JS for Beginners",
      instructor: "John Smith",
      rating: "4.8",
      price: "49"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      category: "Programming",
      title: "JavaScript Masterclass",
      instructor: "David Lee",
      rating: "4.7",
      price: "59"
    },
     {
      id: 3,
      title: "UI/UX Design with Figma",
      instructor: "Sarah Kim",
      price: "39",
      rating: "4.9",
      category: "Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Michael Chen",
      price: "69",
      rating: "4.8",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
    },
    {
      id: 5,
      title: "Full Stack Web Development",
      instructor: "Alex Johnson",
      price: "79",
      rating: "4.9",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    },
    {
      id: 6,
      title: "Digital Marketing Basics",
      instructor: "Emily Davis",
      price: "$35",
      rating: "4.6",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }

  ];

  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Popular Courses
          </h2>
          <p className="text-gray-500 mt-2">
            Learn new skills from expert instructors
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((course) => (
            <CardData key={course.id} {...course} />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Card
