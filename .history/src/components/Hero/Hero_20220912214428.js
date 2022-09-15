import React from 'react';

function Hero() {
  return (
    <section class="mb-40 font-sora">
      <div class="relative overflow-hidden bg-[] bg-no-repeat bg-cover bg-hero-entreprise hero-entreprise"></div>
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="text-center text-gray-600">
          <div class="block rounded-lg shadow-lg px-6 py-12 md:px-10 lg:-mr-14 dark:glassmorphism backdrop-blur-xl backdrop-opacity-100 backdrop-contrast-75 shadow-md md:py-16 hero-entreprise-cta dark:glassmorphism">
            <h1 class="text-4xl font-bold tracking-tight mb-12">Votre partenaire du sport, du bien-être et de la <br /><span class="text-[#E73725]">prévention des maladies au travail</span></h1>
            <button className="text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-gray-800 dark:bg-white shadow-md text-[#FFFFFF] dark:text-[#E73725] dark:hover:bg-[#E73725] dark:hover:text-white hover:bg-[#E73725] rounded-full">
              <a href="#a-propos">En savoir plus</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero