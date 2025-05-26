'use client'
import { useState } from 'react';

export default function Contact({onClose}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    onClose(); // Close the modal via parent
  };

  return (
    <div key="contact-modal" className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-2 sm:mx-4 bg-[#C1F0FF] rounded-2xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-darkblue hover:darkblue transition-colors z-10"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-darkblue mx-auto"></div>
          </div>

          {/* Form */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Name Fields - Desktop: Side by side, Mobile: Stacked */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div>
                <label className="block text-golden font-medium text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full py-2 sm:py-3 md:py-4 pl-3 pr-2 sm:pl-4 sm:pr-4 bg-[#C1F0FF] border-2 border-darkblue rounded-md sm:rounded-lg text-darkblue placeholder-darkblue text-sm sm:text-base md:text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-golden font-medium text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full py-2 sm:py-3 md:py-4 pl-3 pr-2 sm:pl-4 sm:pr-4 bg-[#C1F0FF] border-2 border-darkblue rounded-md sm:rounded-lg text-darkblue placeholder-darkblue text-sm sm:text-base md:text-lg"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-golden font-medium text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full py-2 sm:py-3 md:py-4 pl-3 pr-2 sm:pl-4 sm:pr-4 bg-[#C1F0FF] border-2 border-darkblue rounded-md sm:rounded-lg text-darkblue placeholder-darkblue text-sm sm:text-base md:text-lg"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-golden font-medium text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full py-2 sm:py-3 md:py-4 pl-3 pr-2 sm:pl-4 sm:pr-4 bg-[#C1F0FF] border-2 border-darkblue rounded-md sm:rounded-lg text-darkblue placeholder-darkblue text-sm sm:text-base md:text-lg"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-golden font-medium text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="4"
                className="w-full py-2 sm:py-3 md:py-4 pl-3 pr-2 sm:pl-4 sm:pr-4 bg-[#C1F0FF] border-2 border-darkblue rounded-md sm:rounded-lg text-darkblue placeholder-darkblue text-sm sm:text-base md:text-lg resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2 sm:pt-3 md:pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="py-2 sm:py-3 md:py-4 lg:py-5 pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 bg-darkblue text-golden font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-md sm:rounded-lg hover:bg-blue-900 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}