import React, { useState, useEffect } from "react";
import { Mail, Send } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(
      ".contactme",

      {
        scrollTrigger: {
          trigger: ".contactme",
          start: "top center",
          scrub: true,
        },
        x: 50,

        duration: 1,
        stagger: 0.5,
        ease: "power3.in",
      }
    );
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section  className="py-20 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] to-blue-300  mb-12 text-center dark:text-white">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="contactme">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:contact@example.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  valentinpola7@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Location:</span>
                <span>Bonapriso,Douala</span>
              </p>
            </div>
          </div>
          <form className="space-y-6 form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>

            <div class="relative justify-center items-center flex text-lg px-3 py-1  rounded-full bg-[#4169E1] dark:bg-gray-700  font-serif text-white overflow-hidden group">
              <span class="absolute inset-0 bg-black dark:bg-gray-500 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
              <button className=" outline-none relative  text-white px-6 py-3 rounded-lg flex items-center gap-2  shadow-lg hover:shadow-xl">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
