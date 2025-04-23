import React from "react";
import Navbar from "./Navbar";
import GradientText from "./GradientText";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section class=" py-16 px-6 sm:px-12 mt-30 md:mt-30">
        <div class="max-w-5xl mx-auto -z-10">
          {/* <!-- Profile + Intro --> */}
          <div class="relative p-6 rounded-2xl shadow-lg border-4 border-yellow-400">
            <div class="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <img
                src="src/assets/image.jpg"
                alt="Profile"
                class="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 shadow-xl object-[center_40%]"
              />
            </div>
            <div class="mt-20 text-center">
              <h1 class="text-3xl font-bold text-white">
                <GradientText
                  colors={[
                    "#F78FF7",
                    "#FAF55A",
                    "#4AE340",
                    "#F78FF7",
                    "#42f55d",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className=""
                >
                  <p className="font-bold">Hi, I'm SIPUN MEHER</p>
                </GradientText>
              </h1>

              <p class="text-white mt-2">
                Web & Java Developer passionate about building seamless,
                performant, and beautiful web applications.
              </p>
            </div>
          </div>

          {/* <!-- About / Bio --> */}
          <div class="mt-12 text-center max-w-3xl mx-auto">
            <h2 class="text-2xl font-semibold  mb-4 text-yellow-400 hover:underline decoration-yellow-400">
              About Me
            </h2>
            <p class="text-white text-lg">
              I’m a self-driven developer with experience in building full-stack
              applications using modern JavaScript frameworks and solid backend
              development in Java. Whether it’s crafting responsive UIs or
              writing scalable backend logic, I love bringing ideas to life in
              code.
            </p>
          </div>

          {/* <!-- Skills --> */}

          <div class="mt-12 text-center">
            <h2 class="text-2xl font-semibold text-yellow-400 mb-4 hover:underline decoration-yellow-400">
              Skills
            </h2>
            <div class="flex flex-wrap justify-center gap-4">
              <span class="px-4 py-2 bg-yellow-200 text-yellow-800 font-medium rounded-lg hover:scale-110">
                Java
              </span>
              <span class="px-4 py-2 bg-blue-200 text-blue-800 font-medium rounded-lg transform transition 300 hover:scale-110 ">
                HTML
              </span>
              <span class="px-4 py-2 bg-orange-200 text-orange-800 font-medium rounded-lg transform transition 300 hover:scale-110 ">
                CSS
              </span>
              <span class="px-4 py-2 bg-green-200 text-green-800 font-medium rounded-lg transform transition 300 hover:scale-110 ">
                React.js
              </span>
              <span class="px-4 py-2 bg-purple-200 text-purple-800 font-medium rounded-lg transform transition 300 hover:scale-110 ">
                Tailwind CSS
              </span>
              <span class="px-4 py-2 bg-lime-300 text-lime-800 font-medium rounded-lg transform transition 300 hover:scale-110 ">
                Express.js
              </span>
              <span class="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg transform transition 300 hover:scale-110 ">
                MySQL
              </span>
              <span class="px-4 py-2 bg-red-200 text-red-800 font-medium rounded-lg transform transition 300 hover:scale-110">
                REST APIs
              </span>
            </div>
          </div>

          {/* <!-- Call to Action --> */}
          <div class="mt-12 text-center">
            <a
              href="https://raw.githubusercontent.com/Sipun12/web-development/3140ee745c9e2eecc054cc7ac6add345f83337f1/Resume%20Java%20%26%20Web.pdf"
              target=""
              class="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow  hover:scale-120 hover:bg-yellow-500 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* <Footer/> */}
    </>
  );
};

export default About;
