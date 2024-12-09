import React, { useState } from 'react';
import gsap from 'gsap';
import { Mail, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast"

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const {toast }= useToast();
  const serviceId = import.meta.env.VITE_PUBLIC_SERVICE_ID;
  const templateId = import.meta.env.VITE_PUBLIC_TEMPLATE_ID;
  const userId = import.meta.env.VITE_PUBLIC_PUBLIC_KEY;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
 const template={
  from_name:formData.name,
  from_email:formData.email,
  to_name:"Pola",
  message:formData.message
 }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Sending form data to emailjs
    emailjs
      .send(serviceId, templateId, template, userId)
      .then(
        () => {
          toast({
            title: "Successfully sent",
          });
          console.log('SUCCESS!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          toast({
            title: "Error",
            description: error.text || "An unknown error occurred",
          });
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <main className="dark:bg-black bg-white grid min-h-screen max-w-md md:max-w-full">
      <Navbar />

      <section className="py-20 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] to-blue-300 mb-12 text-center">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
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
                    href="mailto:valentinpola7@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    valentinpola7@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <span className="font-medium">WhatsApp:</span>
                  <a
                    href="https://wa.me/651118070?text=Hello Pola, I wish to book a service."
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +237 651 118 070
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <span className="font-medium">Location:</span>
                  <span>Bonapriso, Douala</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
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

              <button
                type="submit"
                className="relative flex justify-center items-center text-lg px-6 py-3 rounded-full bg-[#4169E1] dark:bg-[#5A8DFD] font-serif overflow-hidden group shadow-lg hover:shadow-xl"
              >
                <span className="absolute inset-0 bg-black dark:bg-white transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative dark:text-black text-white flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
