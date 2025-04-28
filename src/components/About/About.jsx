import React from "react";
//import ReactTypingEffect from 'react-typing-effect';
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px=[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/** Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/** Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/** Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Muhammad Rizki Eka Saputra
          </h2>
          {/**Skills Heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Fullstack Developer",
                1000,
                "App Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Coder",
                1000,
                "Design Graphic",
                1000,
              ]}
              speed={50}
              deletionSpeed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
            {/*<ReactTypingEffect
              text={[
                "Fullstact Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            ></ReactTypingEffect>*/}
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading text-justify">
              I am a dedicated full-stack developer with over two years of
              experience in designing and developing scalable web applications.
              Proficient in both front-end and back-end technologies, I
              specialize in the MERN stack and other modern frameworks to
              deliver seamless user experiences and efficient, high-quality
              digital solutions.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading text-justify">
              With a strong passion for web development and data science, I am
              highly motivated to continuously grow and adapt in a dynamic
              environment. I thrive both in collaborative teams and when working
              independently. Beyond my technical background, I have gained
              valuable soft skills through assisting in my family's retail
              business, teaching children, and designing various materials such
              as banners and certificates. These experiences have honed my
              multitasking abilities, attention to detail, and enthusiasm for
              continuous learning.
            </p>
            {/** Resume Button */}
            <a
              href="https://drive.google.com/file/d/1QvVA4x8z1pB-RJg0ildAqRs3CdoMRfVy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-4 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </h3>
        </div>

        {/** Right Side Img */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Muhammad Rizki Eka Saputra"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
