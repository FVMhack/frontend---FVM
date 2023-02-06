import React from 'react'
import heroImage from "../assets/myImage.png"

const Hero = () => {
  return (
    <section class="bg-gray-900 min-h-screen overflow-hidden lg:h-screen  text-white">
      <div  class="mx-2 max-w-screen-2xl   py-30 lg:flex lg:h-screen lg:items-center">

  <div
    class="mx-auto max-w-screen-3xl px-4 ml-8 mr-12  py-40 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mb-4 py-10  max-w-3xl text-center">
      <h1
        class=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl"
      >
        A Revolutionary 

        <span   class="sm:block py-2"> Storage Market </span>
      </h1>

      

      <p class="mx-auto  mt-4 py-5 max-w-xl sm:text-xl tracking-normal sm:leading-relaxed">
      4eva.Storage is a secure, reliable platform for Filecoin data storage, offering affordable, scalable solutions.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 tracking-wide bg-blue-600 px-12 py-3 text-lg font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
        Connect Wallet
        </a>

        <a
          class="block w-full rounded border border-blue-600 tracking-wide px-12 py-3 text-lg font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
  <img src={heroImage} class="object-contain max-w-xm rounded-lg 
  mr-4 ml-12 transition-transform duration-[250ms]  hover:-translate-y-5 shadow-3xl shadow-indigo-500/50 {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}"   alt="" />
  </div>
</section>

  )
}

export default Hero