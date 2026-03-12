import React from 'react'

function Contect() {
  return (
    <section className=' bg-fuchsia-50 pt-24 pb-12 overflow-hidden min-h-screen'>
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-3">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6 p-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">📍 Location</h3>
              <p className="text-gray-500">
                Phnom Penh, Cambodia
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">📧 Email</h3>
              <p className="text-gray-500">
                support@elearning.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">📞 Phone</h3>
              <p className="text-gray-500">
                +855 00 000 000
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow">

            <form className="space-y-5">

              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contect
