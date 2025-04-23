import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_2hoxrug",     // Replace
        "template_5u78p8p",    // Replace
        form.current,
        "VGc6s51LaZChsDnfp"      // Replace
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSending(false);
        }
      );
  };

  return (
    <>
    {/* <Navbar/> */}
    <section className="min-h-screen bg-zinc-900 flex items-center justify-center px-4 py-16 text-yellow-400 relative mt-20">
      {/* Fancy Toast */}
      {sent && (
        <div className="absolute top-8 z-50 animate-fade-in-down">
          <div className="bg-gray-800/90 border border-cyan-500 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-sm">
            <CheckCircle2 className="text-green-400 w-6 h-6" />
            <span className="text-white">Message sent successfully!</span>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center hover:underline decoration-yellow-400">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center gap-2"
          >
            {isSending ? (
              <>
                <span>Sending...</span>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>
      </div>

      {/* Toast animation */}


            {/* <Footer/> */}
    </section>
    </>
  );
}
