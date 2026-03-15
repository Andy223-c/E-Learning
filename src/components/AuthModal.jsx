import React, { useState } from "react";

function AuthModal({ mode, close }) {

  const [isLogin, setIsLogin] = useState(mode === "login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end items-center z-50">

      <div className="bg-gray-50 w-[420px] p-6 rounded-2xl shadow-xl relative mr-5">

        {/* Close */}
        <button
          onClick={close}
          className="absolute right-4 top-4 text-gray-500"
        >
          ✕
        </button>   

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded-lg"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border px-4 py-2 rounded-lg pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        {/* Switch */}
        <p className="text-center text-sm mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
}

export default AuthModal;