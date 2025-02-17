import React from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import "../Css/Hero.css";

const Hero = () => {
  return (
    <section className="h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      {/* stars */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            Hi👋, I'm <p className="text-blue-400">Sujal Saha</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-3xl text-lg mb-3"
          >
            Full-Stack Developer | MERN Stack Enthusiast
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-xl text-gray-300"
          >
            {" "}
            I am a competitive programmer, open-source contributor, and have a
            strong interest in learning new skills. I enjoy solving complex
            problems and constantly challenge myself to grow in the world of
            competitive programming.
          </motion.p>
          <motion.a
            href="/sujal_resume.pdf"
            download="sujal_resume.pdf"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className='w-[250px] px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] '><Download className='w-5 h-5'/>
            Download Resume
          </motion.a>

          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <a
              href="https://github.com/sujal286"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com/sujal_28_0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/sujal-saha-724ab126b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a
              href="https://twitter.com/@SahaSujal28333"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="hover:text-blue-400" />
            </a>
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Profile}
            alt="Profile"
            className="rounded-full border border-blue-600 w-[5500px] h-[550px] object-cover shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
