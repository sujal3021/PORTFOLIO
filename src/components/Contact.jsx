import React from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents page from refreshing on submit

    // Use the correct service ID, template ID, and user ID
    emailjs
      .sendForm(
        "service_gnwdyih", // Replace with your Service ID
        "template_grg2hul", // Replace with your Template ID
        e.target, // The form element
        "q2fjFi3I-dhEfhndc" // Public Key (this is your user ID for the client side)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                Let's Talk
              </h1>
              <p className="text-gray-300 my-5">
                I’m always excited to connect with others! Whether you have a
                question, want to discuss ideas, or just want to say hello, feel
                free to reach out. Let’s explore new possibilities together and
                make something great happen!
              </p>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-600 mt-2">
                <a href="#" className="text-blue-500 hover:underline">
                  freakop7047@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <p className="text-gray-600 mt-2">
                <a href="#" className="text-blue-500 hover:underline">
                  +91 7047543299
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                <a
                  href="https://github.com/sujal286"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/sujal_28_0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-blue-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujal-saha-724ab126b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-400" />
                </a>
                <a
                  href="https://twitter.com/@SahaSujal28333"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter className="text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Get in Touch
            </h3>
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Add name attribute to map data with EmailJS template
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // Add name attribute
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Add name attribute
                  rows={5}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
