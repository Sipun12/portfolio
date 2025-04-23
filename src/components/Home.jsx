import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import RotatingText from "./RotatingText";
import Footer from "./Footer";

const Home = () => {
  const [progress, setProgress] = useState(null);

  const downloadResume = () => {
    const driveUrl = "https://raw.githubusercontent.com/Sipun12/web-development/3140ee745c9e2eecc054cc7ac6add345f83337f1/Resume%20Java%20%26%20Web.pdf"; // Direct download link

    const xhr = new XMLHttpRequest();
    xhr.open("GET", driveUrl);
    xhr.responseType = "blob";

    xhr.onload = () => {
      const url = URL.createObjectURL(xhr.response);
      const link = document.createElement("a");
      link.href = url;
      link.download = "My_Resume.pdf";
      link.click();
      URL.revokeObjectURL(url);
      setProgress(null); // Reset progress after download finishes
    };

    xhr.onerror = () => {
      alert("Download failed");
      setProgress(null); // Reset on error
    };

    xhr.send();
  };

  return (
    <>
      {/* <Navbar /> */}
      <section className="max-w-screen flex mt-20 md:mt-40 flex-col lg:flex-row items-center justify-around ">
        <div class="max-w-sm flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0 p-10">
          <div class="max-w-xl text-white flex flex-col gap-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat leading-tight">
              HI, I'M SIPUN!
              <br />
              {/* <span
                style={{ fontFamily: "'Baloo Bhaina 2', cursive" }}
                className="web-text text-yellow-400"
              >
                WEB
              </span>
              <span
                style={{ fontFamily: "'Baloo Bhaina 2', cursive" }}
                className="java-text text-yellow-400"
              >
                JAVA
              </span> */}
              <div className="flex">
                <RotatingText
                  texts={["WEB", "JAVA"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-yellow-400 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-30 md:w-40 mt-2"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
                <span
                  style={{ fontFamily: "'Baloo Bhaina 2', cursive" }}
                  className="ml-5 p-2 text-yellow-400"
                >
                  DEVELOPER
                </span>
              </div>
            </h1>
            <p class="text-[15px] sm:text-[15px] md:text-[15px] font-light max-w-md leading-snug">
              I'm a passionate full-stack developer with a strong foundation in
              building modern, responsive websites and scalable Java
              applications. With hands-on experience in both front-end and
              back-end technologies, I bring a detail-oriented and
              performance-driven mindset to every project.
            </p>
            <div class="flex  justify-center gap-6 mr-8 my-6">
              <button
                onClick={downloadResume}
                aria-label="Download CV"
                class="bg-yellow-400  text-[#0a121d] text-xs sm:text-sm font-semibold px-5 py-2 rounded-xl flex items-center gap-2 hover:brightness-110 transition"
              >
                 {progress !== null ? `Downloading... ${progress}%` : "Download Resume"} 
              </button>
             
      
            </div>
          </div>
        </div>
        <div className="relative w-100 h-100 md:w-100 md:h-100 border-6 rounded-full justify-center border-yellow-400 overflow-visible mt-10">
          <img
            className="absolute -top-17 h-114 w-100 object-cover rounded-full"
            src="src/assets/image-ghibli.png"
            alt="Sipun"
            srcset=""
          />
        </div>
        {/* 
        <div class="relative w-64 h-80 border-4 border-yellow-400 rounded-lg overflow-visible">
          <img
            src="src/assets/image-ghibli.png"
            alt="Your Image"
            class="absolute -top-12 left-0 w-full object-cover rounded-t-lg"
          />
        </div> */}
      </section>

      <About />
      <Projects />
      <Contact />
      {/* <Footer/> */}
    </>
  );
};

export default Home;
