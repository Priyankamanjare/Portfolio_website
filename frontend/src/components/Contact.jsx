import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // ---- Vanta Setup ----
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x453447, // wave color
          backgroundColor: 0x0, // black background
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  // ---------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setShowNotification(true);

    try {
      const response = await fetch("https://portfolio-website-deew.onrender.com/contact", {
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
    setTimeout(() => setShowNotification(false), 7000);
  };

  return (
    <motion.div
      id="contact"
      ref={vantaRef} // <-- attach Vanta here
      className="border-b border-neutral-800 relative overflow-hidden"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Floating Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-6 transform -translate-x-1/2 z-50 bg-neutral-900 text-white px-6 py-3 rounded-xl shadow-lg border border-purple-700"
          >
            {status}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Content */}
      <div className="relative z-10 flex flex-col justify-center items-center py-14">
        <h1 className="text-2xl text-center my-5 text-slate-300">Get in Touch</h1>
        <div className="inline-block mx-auto text-center p-5">
          <h1 className="text-2xl font-bold text-slate-100">Priyanka Vishnu Manjare</h1>
          <p className="my-3 text-slate-200">priyankamanjare05@gmail.com</p>
          {/* <p className="underline offset-4 text-slate-200"></p> */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left max-w-md mx-auto">
            <div className="w-full rounded-2xl p-[2px] bg-gradient-to-br from-purple-900/80 via-fuchsia-900/70 to-pink-900/80">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-2xl bg-black text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-700/40 placeholder:text-slate-400 border-none"
                required
              />
            </div>
            <div className="w-full rounded-2xl p-[2px] bg-gradient-to-br from-purple-900/80 via-fuchsia-900/70 to-pink-900/80">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-2xl bg-black text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-700/40 placeholder:text-slate-400 border-none"
                required
              />
            </div>
            <div className="w-full rounded-2xl p-[2px] bg-gradient-to-br from-purple-900/80 via-fuchsia-900/70 to-pink-900/80">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-2xl bg-black text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-700/40 placeholder:text-slate-400 border-none"
                rows={4}
                required
              />
            </div>
            <div className="w-full rounded-2xl p-[2px] bg-gradient-to-br from-purple-900/80 via-fuchsia-900/70 to-pink-900/80">
              <button
                type="submit"
                className="w-full font-semibold p-3 rounded-2xl shadow-lg relative z-10 hover:shadow-purple-500/40 hover:scale-105 transition-transform duration-300 bg-black text-slate-100 border-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
