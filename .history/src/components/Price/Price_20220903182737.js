const Price = () => {

  return (
    <section class="h-fit my-28" id="prix" >
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pensé pour <span className="text-gray-400">vous</span></h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec mauris id quam pharetra sodales et ut justo. Duis sit amet felis dolor. </p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 shadow-md from-white/60 to-transparent rounded-2xl xl:p-8 h-fit">
              <h3 class="mb-4 text-2xl font-semibold">Forfait à la séance</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Orci varius natoque penatibus et magnis dis parturient montes.</p>
              <div class="flex justify-center items-baseline">
                  <span class="mt-8 text-5xl font-extrabold">50€</span>
                  <span class="text-gray-500 dark:text-gray-400">/séance</span>
              </div>
              <p class="mb-8 text-gray-500 dark:text-gray-400 text-xs">(soit 25€ après avantages fiscaux)</p>
              
              <a href="#contact" class="text-gray-800 bg-gray-400 dark:hover:bg-gray-500 hover:bg-gray-300 rounded-full w-fit dark:hover:text-gray-800 hover:text-gray-200 transition-all duration-300 focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">C'est partis !</a>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center shadow-md from-white/60 to-transparent rounded-2xl xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75">
              <h3 class="mb-4 text-2xl font-semibold">Forfait 10 séances</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Orci varius natoque penatibus et magnis dis parturient montes.</p>
              <div class="flex justify-center items-baseline mt-8">
                  <span class="mr-2 text-5xl font-extrabold">45€</span>
                  <span class="text-gray-500 dark:text-gray-400">/séance</span>
              </div>
              <p class="mb-8 text-gray-500 dark:text-gray-400 text-xs">(soit 22,5€ après avantages fiscaux)</p>
              <a href="#contact" class="dark:hover:text-gray-800 hover:text-gray-200 bg-primary-600 transition-all duration-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">C'est partis !</a>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center shadow-md from-white/60 to-transparent rounded-2xl xl:p-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75">
              <h3 class="mb-4 text-2xl font-semibold">Forfait 20 séances</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Orci varius natoque penatibus et magnis dis parturient montes.</p>
              <div class="flex justify-center items-baseline mt-8">
                  <span class="mr-2 text-5xl font-extrabold">40€</span>
                  <span class="text-gray-500 dark:text-gray-400">/séance</span>
              </div>
              <p class="mb-8 text-gray-500 dark:text-gray-400 text-xs">(soit 20€ après avantages fiscaux)</p>
              <a href="#contact" class="dark:hover:text-gray-800 hover:text-gray-200 bg-primary-600 transition-all duration-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">C'est partis !</a>
          </div>
      </div>
  </div>
</section>
  );
}

export default Price;