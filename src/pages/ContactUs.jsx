import React from 'react';
import Background from '../components/Background';
import ContactForm from '../components/ContactForm';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Background */}
      <div className="relative h-[500px] md:h-[600px] overflow-visible">
        {/* Background wrapper with proper positioning */}
        <div className="absolute inset-0 w-full h-full">
          <Background />
        </div>
        
        {/* Header Content - Positioned on top of background */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
            Get in Touch
          </h1>
          <p className="text-white text-base md:text-lg max-w-3xl mx-auto text-center">
            Have questions about our AI-powered architecture dashboard? We'd love to hear from you. Reach out to two-learn anytime.
          </p>
        </div>

        {/* Contact Form - Positioned to overlap background and content area */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-2xl px-4 z-30">
          <ContactForm />
        </div>
      </div>

      {/* Spacer to account for overlapping form */}
      <div className="h-64 md:h-80"></div>
    </div>
  );
}