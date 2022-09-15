import React from 'react';

function Hero() {
  return (
    <section className="mb-40 font-sora">
      <div className="relative overflow-hidden bg-[] bg-no-repeat bg-cover bg-hero-entreprise hero-entreprise rounded-lg"></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-800 dark:text-white">
          <div className="block rounded-lg shadow-lg px-6 py-12 md:px-10 lg:-mr-14 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 shadow-md md:py-16 hero-entreprise-cta dark:glassmorphism">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-12">Votre partenaire du sport, du bien-être et de la <br /><span className="text-[#E73725]">prévention des maladies</span> au travail</h1>
            <button className=" text-lg md:text-xl px-6 py-[6px] font-bold mt-[27px] bg-gray-800 dark:bg-[#E73725] shadow-md dark:shadow-dk text-[#FFFFFF] dark:text-white dark:hover:bg-white dark:hover:text-[#E73725] hover:bg-[#E73725] rounded-full transition-all duration-300 cursor-pointer">
              <a href="#entreprise">En savoir plus</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero