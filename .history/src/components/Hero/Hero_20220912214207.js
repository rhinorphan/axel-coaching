import React from 'react';

function Hero() {
  return (
    <section class="mb-40 font-sora">
      <div class="relative overflow-hidden bg-[] bg-no-repeat bg-cover bg-hero-entreprise hero-entreprise"></div>
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="text-center text-white">
          <div class="block rounded-lg shadow-lg px-6 py-12 md:px-10 lg:-mr-14 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 shadow-md md:py-16 hero-entreprise-cta dark:glassmorphism">
            <h1 class="text-4xl font-bold tracking-tight mb-12">Votre partenaire du sport, du bien-être et de la <br /><span class="text-[#E73725]">prévention des maladies au travail</span></h1>
            <a class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
            <a class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero