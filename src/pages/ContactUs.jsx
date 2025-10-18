import React, { useState } from "react";
import Background from "../components/Background";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Background Section with Header */}

      {/* <div className="relative pt-20 pb-64 md:pb-80 flex-grow">
        <Background /> */}

        <div className="relative pt-20 pb-64 md:pb-80 flex-grow overflow-hidden"> {/* overflow-hidden clips any extra from Background */}
        {/* Background now covers entire section absolutely - no flow impact */}
        <div className="absolute inset-0 z-0">
          <Background /> {/* If Background isn't already absolute, wrap it or add classes inside it */}
        </div>
        
        {/* Header Content */}
        <div className="relative z-10 container mx-auto px-4 pt-22 md:pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed px-4">
              Have questions about our AI-powered architecture dashboard? We'd love to
              hear from you. Reach out to our team anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section - Overlapping */}
      <div className="relative -mt-48 md:-mt-64 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="space-y-5 md:space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 md:mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Syed Muhammad"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 md:mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Bilal"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 md:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 md:mb-2"
                  >
                    Write Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hoiiiii"
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-blue-500 text-white rounded-full font-medium shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    <span>Submit</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;







