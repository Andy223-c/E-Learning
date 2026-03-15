import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card';

function Hero() {
//   return (
//     <section className='bg-fuchsia-50 overflow-hidden relative py-24 ml-6'>
//         <Header/>
//         <div className="container grid grid-cols-1 md:grid-cols-2 min-h-\[650px]">
//             {/* Brand info */}
//             <div className="">
//                 <h1 className='text-3xl lg:text-5xl font-bold \!leading-snug'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis.
//                 </h1>
//                 <div className="flex justify-center md:justify-start">
//                     <button className='login-btn'>Get Start</button>
//                 </div>
//             </div>
//              {/* Hero img */}
//               {/* Brand info */}
//         </div>
      
//     </section>
//   )
return (
    <section className=" pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center min-h-\[650px] gap-10">

        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
            Learn New Skills
            <span className="text-indigo-600"> Online</span> From Experts
          </h1>

          <p className="text-gray-600 text-lg">
            Join thousands of students learning programming, design,
            and business skills from top instructors around the world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="primary-btn transition">
              Get Started
            </button>

            <button className="login-btn transition">
              Browse Courses
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pb-4 px-3 cursor-pointer">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">10K+</h3>
              <p className="text-gray-500 text-sm">Students</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-500 text-sm">Courses</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">4.8 ⭐</h3>
              <p className="text-gray-500 text-sm">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-vector/realistic-vector-learning-white-background_873925-471300.jpg?w=2000"
            alt="E-learning"
            className="\w-[400px] md:\w-[500px] object-contain rounded-full"
          />
        </div>

      </div>
      <Card/>
    </section>
  );
}

export default Hero
