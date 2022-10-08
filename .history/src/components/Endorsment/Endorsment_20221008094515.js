import React from 'react'

function Endorsment() {
  return (
    <section className="my-32 text-gray-800 dark:text-white text-center">
      <h2 className="text-4xl tracking-tight font-extrabold mb-12">Les <span className='text-[#E73725]'>meilleures</span> entreprises me font <span className='text-[#E73725]'>confiance</span></h2>

      <div className="grid gap-6 items-center justify-center">
        <div className="my-12 lg:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/2/2a/Logo-laposte.png"
            className="img-fluid grayscale px-6 md:px-12 max-h-44"
            alt="La Poste - logo"
          />
        </div>
      </div>
    </section>
  )
}

export default Endorsment