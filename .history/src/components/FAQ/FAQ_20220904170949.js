import React from 'react'
import { useState } from 'react'

function FAQ() {

  const [showFAQ, setShowFAQ] = useState(false);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  const handleFAQ = () => {
    this.state = {
      open: false
    };

  }

  return (
    <section class="">
    <div class="container px-6 py-12 mx-auto">
        <h1 class="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200">FAQ</h1>

        <div class="mt-8 space-y-8 lg:mt-12">
            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75">
                <button class="flex items-center justify-between w-full" onClick={handleFAQ}>
                    <h1 class="font-semibold text-gray-700 dark:text-white">Comment régler mes séances ?</h1>

                    <span class="text-gray-400 bg-gray-200 rounded-full" id='minus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>
                    <span class="text-white bg-gray-500 rounded-full" id='plus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
                { showFAQ ? (<p class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>) : (<div></div>)}
            </div>

            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75">
                <button class="flex items-center justify-between w-full">
                    <h1 class="font-semibold text-gray-700 dark:text-white">Is the cost of the appoinment covered?</h1>

                    <span class="text-white bg-gray-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
                <p class="mt-6 text-sm text-gray-500 dark:text-gray-300 hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
            </div>

            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75">
                <button class="flex items-center justify-between w-full">
                    <h1 class="font-semibold text-gray-700 dark:text-white">Do i need a referral?</h1>

                    <span class="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
                <p class="mt-6 text-sm text-gray-500 dark:text-gray-300 hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
            </div>

            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75">
                <button class="flex items-center justify-between w-full">
                    <h1 class="font-semibold text-gray-700 dark:text-white">What are your opening house?</h1>

                    <span class="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
                <p class="mt-6 text-sm text-gray-500 dark:text-gray-300 hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
            </div>

            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75">
                <button class="flex items-center justify-between w-full">
                    <h1 class="font-semibold text-gray-700 dark:text-white">What can i expect at my first consultation?</h1>

                    <span class="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
                <p class="mt-6 text-sm text-gray-500 dark:text-gray-300 hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default FAQ