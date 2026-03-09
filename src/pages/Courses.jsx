import React from 'react'
import Card from '../components/Card'

function Courses() {
  return (
    <section className="pt-28 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Search Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Search Courses
          </h2>

          <div className="flex justify-center">
            <div className="flex w-full max-w-xl shadow-md rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search the Courses..."
                className="w-full px-4 py-3 outline-none"
              />

              <button className=" from-purple-500 to-pink-500 text-white px-6 font-medium">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Student Images Grid */}
          <div className="grid grid-cols-2 gap-4 p-6 border-2 border-dashed border-pink-300 rounded-3xl">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="rounded-2xl"
            />

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="rounded-2xl"
            />

            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              className="rounded-2xl"
            />

            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="rounded-2xl"
            />
          </div>

          {/* Course Info */}
          <div className="space-y-6">

            <h2 className="text-4xl font-bold text-gray-800">
              <span className="text-purple-600">Gain</span> for our Online Learning
            </h2>

            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                🎓
              </div>

              <div>
                <h4 className="font-semibold text-lg">Online Degree</h4>
                <p className="text-gray-500 text-sm">
                  This maintains the essence of your original code
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <div className="bg-pink-100 text-pink-500 p-3 rounded-full">
                📜
              </div>

              <div>
                <h4 className="font-semibold text-lg">Certification</h4>
                <p className="text-gray-500 text-sm">
                  Valid Certificates and Rewards.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                🏆
              </div>

              <div>
                <h4 className="font-semibold text-lg">Placements</h4>
                <p className="text-gray-500 text-sm">
                  100% placements & offers
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Card/>
    </section>
  )
}

export default Courses
