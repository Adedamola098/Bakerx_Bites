import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Logic to send form data (e.g., API call to backend)
    // Reset form after submission (optional)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  useEffect(() => {
    setFadeIn(true);
  }, []); // Trigger fade-in effect on load

  return (
    <div className={`min-h-screen flex py-20 flex-col transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl drop-shadow font-extrabold text-yellow-300 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            Have questions or inquiries? We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 rounded-lg shadow-lg bg-white">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-800">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-800">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                rows="5"
                required
              />
            </div>
            <button type="submit" className="w-full py-3 bg-amber-400 text-white text-lg font-semibold rounded-lg hover:bg-yellow-400 transition">
              Send Message
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-6 text-yellow-600">
              <p>Your message has been successfully sent! We will get back to you soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
