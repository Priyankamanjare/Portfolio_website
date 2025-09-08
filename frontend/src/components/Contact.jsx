import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Contact = () => {
  const [formData, setFormData] = useState({name:"", email:"", message:""});
  const [status, setStatus] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleChange=(e)=> {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setShowNotification(true);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong!");
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 7000);
  };

  return (
    <div className="border-b border-neutral-800 ">
      {/* Floating Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-900 text-white px-6 py-3 rounded-xl shadow-lg border border-pink-700"
          >
            {status}
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="text-4xl text-center my-10 font-light">Get in Touch</h1>
      <div className="flex justify-center items-center">
        <div className="inline-block mx-auto text-center p-5">
          <h1 className="text-2xl font-bold"> Priyanka Vishnu Manjare</h1>
          <p className="my-3">priyankamanjare05@gmail.com</p>
          <p className="underline offset-4">+91 8625091972</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left max-w-md mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-2xl border border-neutral-700  bg-neutral-900 text-white focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-2xl border-neutral-700  bg-neutral-900 text-white focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-2xl border-neutral-700 bg-neutral-900 text-white focus:outline-none focus:border-blue-500"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full border border-neutral-700  bg-gradient-to-b from-red-950 via-pink-900 to-pink-600  font-semibold py-2 px-4 rounded-2xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
