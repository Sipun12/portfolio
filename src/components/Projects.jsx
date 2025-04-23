import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
const Projects = () => {
  return (
    <>
    {/* <Navbar/> */}
    

    <section class="bg-[#18181b] py-12 px-4 md:px-12">
  <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 mt-20 text-yellow-400 hover:underline decoration-yellow-400">My Projects</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* <!-- Project Card --> */}
    <div class=" border-2 border-yellow-400 rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      <img src="/src/assets/codegmu.jpg" alt="Project Image" class="w-full h-48 object-cover"/>
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-yellow-400">CodeGmu</h3>
        <p class="text-white mb-4">Short description of the project that explains what it does and technologies used.</p>
        <div class="flex justify-between items-center">
          <a href="#" class="text-yellow-600 hover:underline">View Demo</a>
          <a href="#" class="text-yellow-600 hover:text-yellow-600">GitHub ↗</a>
        </div>
      </div>
    </div>

    

    {/* <!-- Project Card --> */}
    {/* <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src="https://via.placeholder.com/600x400" alt="Project Image" class="w-full h-48 object-cover"/>
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">Project Title 3</h3>
        <p class="text-gray-600 mb-4">You can easily update the title, description, and links later.</p>
        <div class="flex justify-between items-center">
          <a href="#" class="text-red-500 hover:underline">View Demo</a>
          <a href="#" class="text-gray-500 hover:text-black">GitHub ↗</a>
        </div>
      </div>
    </div> */}

    {/* <!-- Add more cards here --> */}
  </div>
</section>


      {/* <Footer/> */}
    </>
  )
}

export default Projects
