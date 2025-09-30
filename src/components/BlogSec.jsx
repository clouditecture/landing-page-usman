import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function BlogNewsSection() {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    // Fetch blogs data from JSON file
    fetch('/BLOG-SEC/Blog.json')
      .then((response) => response.json())
      .then((data) => setBlogsData(data))
      .catch((error) => console.error('Error loading blogs:', error));
  }, []);

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-6">
            <span>Blogs & News</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Blogs & News
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-8">
            Stay updated with the latest trends in architecture, AI innovations, and company news from our team.
          </p>

          {/* Explore More Button */}
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-50 transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
            <span>Explore More</span>
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-500"
            >
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                  {blog.description}
                </p>

                {/* View Projects Button */}
                <button className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-300">
                  <span className="text-sm">View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}