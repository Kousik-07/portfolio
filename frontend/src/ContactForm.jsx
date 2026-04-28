import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

      console.log(
        "IDs:",
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_PUBLICID,
        import.meta.env.VITE_TEMPLATEID
      );
      
    // Apnar IDs gulo ekhane boshan
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLICID,
        }
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          setIsSending(false);
          e.target.reset(); // Form clear hobe
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <input type="hidden" name="title" value="Portfolio Contact Form" />
          <label className="text-sm font-mono text-gray-400">Full Name</label>
          <input
            type="text"
            name="name" // Template er {{name}} er sathe match thakte hobe
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-mono text-gray-400">
            Email Address
          </label>
          <input
            type="email"
            name="email" // Template er {{email}} er sathe match thakte hobe
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-mono text-gray-400">Message</label>
          <textarea
            name="message" // Template er {{message}} er sathe match thakte hobe
            rows="4"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300 transition-colors resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`mt-4 bg-amber-300 text-black font-bold py-3 rounded-lg transition-all duration-300 transform active:scale-95 ${
            isSending
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white hover:scale-[1.02]"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
