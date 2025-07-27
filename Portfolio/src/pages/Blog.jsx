import React from 'react';

export default function Blog() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
        <h1 className="text-4xl font-extrabold text-[#4169E1] mb-4 animate-pulse">🚧 Coming Soon</h1>
        <p className="text-gray-700 text-lg mb-6">
          My blog section is currently under construction. We're preparing powerful insights, and updates just for you!
        </p>
        <div className="flex justify-center">
          <span className="text-sm bg-[#4169E1] text-white px-4 py-2 rounded-full shadow hover:scale-105 transition-transform duration-300">
            Stay Tuned 🚀
          </span>
        </div>
      </div>
    </div>
  );
}
