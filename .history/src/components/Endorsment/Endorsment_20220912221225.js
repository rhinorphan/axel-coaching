import React from 'react'

function Endorsment() {
  return (
    <section class="my-32 text-gray-800 dark:text-white text-center">
      <h2 class="text-4xl tracking-tight font-extrabold mb-12">Les <span className='text-[#E73725]'>meilleures</span> entreprises me font <span className='text-[#E73725]'>confiance</span></h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
        <div class="mb-12 lg:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/2/2a/Logo-laposte.png"
            class="img-fluid grayscale px-6 md:px-12"
            alt="La Poste - logo"
          />
        </div>
      </div>
    </section>
  )
}

export default Endorsment