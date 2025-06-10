"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  // Get the position of the Enquire Now button on mount
  useEffect(() => {
    // Calculate the approximate position of the sticky enquire button
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowWidth > 768) {
      // md breakpoint
      // The button is positioned at right: 0, top: 55%
      const buttonX = windowWidth - 50; // Approximate button center from right edge
      const buttonY = windowHeight * 0.55; // 55% from top

      setButtonPosition({ x: buttonX, y: buttonY });
    } else {
      // For mobile, center position
      setButtonPosition({ x: windowWidth / 2, y: windowHeight / 2 });
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle form submission logic here
      onClose(); // Close the modal via parent
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate the transform origin and initial position
  const getInitialTransform = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowWidth > 768) {
      // Desktop: Transform from button position to center
      const centerX = windowWidth / 2;
      const centerY = windowHeight / 2;

      return {
        x: buttonPosition.x - centerX,
        y: buttonPosition.y - centerY,
      };
    }

    return { x: 0, y: 0 };
  };

  const initialTransform = getInitialTransform();

  return (
    <AnimatePresence>
      <motion.div
        key="contact-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Modal Content */}
        <motion.div
          className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[#C1F0FF] rounded-2xl shadow-2xl max-h-[95vh] flex flex-col"
          initial={{
            scale: 0,
            x: initialTransform.x,
            y: initialTransform.y,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            x: 0,
            y: 0,
            opacity: 1,
          }}
          exit={{
            scale: 0,
            x: initialTransform.x,
            y: initialTransform.y,
            opacity: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.8,
            duration: 0.4,
          }}
          style={{
            transformOrigin:
              window.innerWidth > 768
                ? `${buttonPosition.x}px ${buttonPosition.y}px`
                : "center center",
          }}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute z-10 transition-colors top-4 right-4 text-darkblue hover:text-blue-900"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          {/* Header - Animated */}
          <motion.div
            className="px-6 pt-6 pb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl text-darkblue">
              Get In Touch
            </h2>
            <motion.div
              className="w-16 h-1 mx-auto sm:w-20 bg-darkblue"
              initial={{ width: 0 }}
              animate={{ width: window.innerWidth >= 640 ? 80 : 64 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
          </motion.div>

          {/* Form Content - Staggered Animation */}
          <motion.div
            className="flex-1 px-6 pb-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.25,
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {/* Name Fields */}
              <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div>
                  <label className="block mb-1 text-sm font-medium text-golden">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={`w-full py-2.5 px-3 bg-[#C1F0FF] border-2 rounded-lg text-darkblue placeholder-darkblue text-sm focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent transition-colors ${
                      errors.firstName ? "border-red-500" : "border-darkblue"
                    }`}
                    required
                  />
                  {errors.firstName && (
                    <motion.p
                      className="mt-1 text-xs text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.firstName}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-golden">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className={`w-full py-2.5 px-3 bg-[#C1F0FF] border-2 rounded-lg text-darkblue placeholder-darkblue text-sm focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent transition-colors ${
                      errors.lastName ? "border-red-500" : "border-darkblue"
                    }`}
                    required
                  />
                  {errors.lastName && (
                    <motion.p
                      className="mt-1 text-xs text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.lastName}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label className="block mb-1 text-sm font-medium text-golden">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className={`w-full py-2.5 px-3 bg-[#C1F0FF] border-2 rounded-lg text-darkblue placeholder-darkblue text-sm focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent transition-colors ${
                    errors.email ? "border-red-500" : "border-darkblue"
                  }`}
                  required
                />
                {errors.email && (
                  <motion.p
                    className="mt-1 text-xs text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Subject */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label className="block mb-1 text-sm font-medium text-golden">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className={`w-full py-2.5 px-3 bg-[#C1F0FF] border-2 rounded-lg text-darkblue placeholder-darkblue text-sm focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent transition-colors ${
                    errors.subject ? "border-red-500" : "border-darkblue"
                  }`}
                  required
                />
                {errors.subject && (
                  <motion.p
                    className="mt-1 text-xs text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label className="block mb-1 text-sm font-medium text-golden">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows="4"
                  className={`w-full py-2.5 px-3 bg-[#C1F0FF] border-2 rounded-lg text-darkblue placeholder-darkblue text-sm resize-none focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent transition-colors ${
                    errors.message ? "border-red-500" : "border-darkblue"
                  }`}
                  required
                ></textarea>
                {errors.message && (
                  <motion.p
                    className="mt-1 text-xs text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="pt-2 text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 text-base font-bold transition-all duration-200 rounded-lg shadow-lg bg-darkblue text-golden hover:bg-blue-900 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-3 -ml-1 animate-spin text-golden"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
