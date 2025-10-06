import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';

export default function Blog() {
  const [blogsData, setBlogsData] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  useEffect(() => {
    // Fetch blogs data from JSON file
    fetch('/BLOG-SEC/Blog.json')
      .then((response) => response.json())
      .then((data) => setBlogsData(data))
      .catch((error) => console.error('Error loading blogs:', error));
  }, []);

  const handleShowMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisibleBlogs(6);
    // Scroll back to top of blog section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasMoreBlogs = visibleBlogs < blogsData.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Background */}
      <div className="relative h-[400px] md:h-[500px] overflow-visible">
        {/* Background wrapper with proper positioning */}
        <div className="absolute inset-0 w-full h-full">
          <Background />
        </div>
        
        {/* Header Text - Positioned on top of background */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 w-full h-full">
    <Background showImages={false} />
  </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
            Blogs & News
          </h1>
          <p className="text-white text-base md:text-lg max-w-3xl mx-auto text-center">
            Stay updated with the latest trends in architecture, AI innovations, and company news from our team.
          </p>
        </div>
      </div>

      {/* Blog Section - Below Background */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* All Blogs Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full">
              <span>All Blogs</span>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogsData.slice(0, visibleBlogs).map((blog) => (
              <Link to={blog.link} key={blog.id}>
                <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 h-full">
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

                    {/* Read More Button */}
                    <button className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-300">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Show More / Show Less Buttons */}
          <div className="flex justify-center gap-4">
            {hasMoreBlogs && (
              <button
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 bg-white font-medium rounded-full hover:bg-blue-50 transition-all duration-300"
              >
                <span>Show More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}

            {visibleBlogs > 6 && (
              <button
                onClick={handleShowLess}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 bg-white font-medium rounded-full hover:bg-blue-50 transition-all duration-300"
              >
                <span>Show Less</span>
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}






