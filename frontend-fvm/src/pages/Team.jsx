import React from 'react'

const Team = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Meet the dynamic team of blockchain enthusiasts, bringing together their unique skills to revolutionize the industry. With a drive to make an impact, to take on the hackathon and bring our ideas to life</p>
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Mohak Malhotra</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Smart Contract Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Mohak worked on the blockend side of the project</p>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
             
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Divyanshu Urmaliya</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Frontend Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Divyanshu worked on the frontend side of the project</p>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#"> Jesus Badillo</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Backend Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jesus worked on the backend side of the project.</p>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">James Efienemokwu</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Backend Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">James worked on the backend side of the project.</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          </a>
                      </li>
                  </ul>
              </div>
          </div>  
      </div>  
  </div>
</section>
  )
}

export default Team