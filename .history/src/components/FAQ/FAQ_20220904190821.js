import React from 'react'
import { useState } from 'react'

function FAQ() {

  const [showFAQ, setShowFAQ] = useState(false);
  const [showFAQ2, setShowFAQ2] = useState(false);  const [showFAQ3, setShowFAQ3] = useState(false);
  const [showFAQ4, setShowFAQ4] = useState(false);
  const [showFAQ5, setShowFAQ5] = useState(false);

  const FAQ = () => {
    setShowFAQ(!showFAQ);
    setShowFAQ2(false)
    setShowFAQ3(false)
    setShowFAQ4(false)
    setShowFAQ5(false)
  }

  const FAQ2 = () => {
    setShowFAQ2(!showFAQ2);
    setShowFAQ(false)
    setShowFAQ3(false)
    setShowFAQ4(false)
    setShowFAQ5(false)
  }

  const FAQ3 = () => {
    setShowFAQ3(!showFAQ3);
    setShowFAQ2(false)
    setShowFAQ(false)
    setShowFAQ4(false)
    setShowFAQ5(false)
  }
  const FAQ4 = () => {
    setShowFAQ4(!showFAQ4);
    setShowFAQ2(false)
    setShowFAQ3(false)
    setShowFAQ(false)
    setShowFAQ5(false)
  }
  const FAQ5 = () => {
    setShowFAQ5(!showFAQ5);
    setShowFAQ2(false)
    setShowFAQ3(false)
    setShowFAQ4(false)
    setShowFAQ(false)
  }

  return (
    <section class="">
    <div class="container px-6 py-8 mx-auto">
        <h1 class="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200">FAQ</h1>

        <div class="mt-8 space-y-8 lg:mt-12">
            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 text-[13px] md:text-[16px]">
                <button class="flex items-center justify-between w-full" onClick={FAQ}>
                    <h1 class="font-semibold text-gray-700 dark:text-white">Comment régler mes séances ?</h1>

                    { showFAQ ?(<span class="text-gray-400 bg-gray-200 rounded-full" id='minus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>) :
                    (<span class="text-white bg-gray-500 rounded-full" id='plus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>)}
                </button>
                { showFAQ ? (<p class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>) : (<div></div>)}
            </div>

            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 text-[13px] md:text-[16px] text-left">
                <button class="flex items-center justify-between w-full" onClick={FAQ2}>
                    <h1 class="font-semibold text-gray-700 dark:text-white">Est-ce qu'une séance est remboursable ?</h1>

                    { showFAQ2 ?(<span class="text-gray-400 bg-gray-200 rounded-full" id='minus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>) :
                    (<span class="text-white bg-gray-500 rounded-full" id='plus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>)}
                </button>
                { showFAQ2 ? (<p class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>) : (<div></div>)}
            </div>

            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 text-[13px] md:text-[16px]">
                <button class="flex items-center justify-between w-full" onClick={FAQ3}>
                    <h1 class="font-semibold text-gray-700 dark:text-white">Puis-je déduire le montant de mes séances des impôts ?</h1>

                    { showFAQ3 ?(<span class="text-gray-400 bg-gray-200 rounded-full" id='minus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>) :
                    (<span class="text-white bg-gray-500 rounded-full" id='plus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>)}
                </button>
                { showFAQ3 ? (<p class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>) : (<div></div>)}
            </div>

            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 text-[13px] md:text-[16px]">
                <button class="flex items-center justify-between w-full" onClick={FAQ4}>
                    <h1 class="font-semibold text-gray-700 dark:text-white">A partir de quel âge ?</h1>

                    { showFAQ4 ?(<span class="text-gray-400 bg-gray-200 rounded-full" id='minus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>) :
                    (<span class="text-white bg-gray-500 rounded-full" id='plus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>)}
                </button>
                { showFAQ4 ? (<p class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>) : (<div></div>)}
            </div>

            <div class="flex flex-col p-8 mx-auto max-w-xl text-center shadow-md from-white/60 to-transparent rounded-2xl items-center xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 text-[13px] md:text-[16px]">
                <button class="flex items-center justify-between w-full" onClick={FAQ5}>
                    <h1 class="font-semibold text-gray-700 dark:text-white">Lorem ipsum dolor sit ?</h1>

                    { showFAQ5 ?(<span class="text-gray-400 bg-gray-200 rounded-full" id='minus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>) :
                    (<span class="text-white bg-gray-500 rounded-full" id='plus'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>)}
                </button>
                { showFAQ5 ? (<p class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>) : (<div></div>)}
            </div>
        </div>
    </div>
</section>
  )
}

export default FAQ