"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async () => {
    setIsSubmitting(true);

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        "service_t78msaf",
        "template_7eys15r",
        {
          from_name: name,
          message: message,
          reply_to: email,
        },
        "nH41xHm_SjR4YkQm2"
      );

      console.log(result.text);
      alert(
        "Your inquiry has been sent successfully! I'll get back to you soon."
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send your inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-8">
      {/* Header */}
      <div className="py-8 text-center">
        <h1 className="text-5xl font-bold py-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
          Freelance Inquiries
        </h1>
        <p className="text-xl text-gray-300 m-4">
          Have a project in mind? Let’s collaborate! Fill out the form below,
          and I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 ">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#0F172A] via-[#1A202C] to-[#0F172A] p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-[#1E293B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 bg-[#1E293B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your project or requirements in detail"
              className="w-full px-4 py-2 bg-[#1E293B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={() => sendEmail()}
            className={`w-full py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold rounded-lg hover:scale-105 transform transition-transform ${
              isSubmitting ? "opacity-50 pointer-events-none" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
