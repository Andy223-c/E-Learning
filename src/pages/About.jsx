import React from "react";

function About() {
  return (
    <section className=" pt-24 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            About Our Platform
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We provide high-quality online courses to help students and
            professionals learn new skills and advance their careers.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students learning"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Learn Anytime, Anywhere
            </h2>

            <p className="text-gray-600">
              Our platform offers a wide range of courses from industry experts.
              Whether you want to learn programming, design, business, or
              marketing, we provide flexible online learning solutions for
              everyone.
            </p>

            <p className="text-gray-600">
              Join thousands of students who are improving their skills and
              building successful careers through our courses.
            </p>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-500">
              Learn from professionals with real industry experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-500">
              Study at your own pace from anywhere in the world.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-gray-500">
              Earn certificates to showcase your new skills.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-indigo-600 text-white rounded-2xl p-10 grid md:grid-cols-4 text-center gap-8 mb-5">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p>Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Courses</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">120+</h3>
            <p>Instructors</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
