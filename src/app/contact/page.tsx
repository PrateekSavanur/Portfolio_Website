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
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-8">
      {/* Header */}
      <div className="py-8 text-center">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-300 m-4">
          I’d love to hear from you! Feel free to reach out via the form below
          or connect with me on social media.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 ">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#0F172A] via-[#1A202C] to-[#0F172A] p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-[#1E293B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Your Email"
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
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
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
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
