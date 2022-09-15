import React from 'react'

function Endorsment() {
  return (
    <section class="mb-32 text-gray-800 text-center">
      <h2 class="text-3xl font-bold mb-12">Les meilleures entreprises me font confiance</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        <div class="mb-12 lg:mb-0">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/2.png"
            class="img-fluid grayscale px-6 md:px-12"
            alt="Nasa - logo"
          />
        </div>

        <div class="mb-12 lg:mb-0">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/1.png"
            class="img-fluid grayscale px-6 md:px-12"
            alt="Amazon - logo"
          />
        </div>

        <div class="mb-12 lg:mb-0">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/3.png"
            class="img-fluid grayscale px-6 md:px-12"
            alt="Nike - logo"
          />
        </div>

        <div class="mb-12 lg:mb-0">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/4.png"
            class="img-fluid grayscale px-6 md:px-12"
            alt="Ikea - logo"
          />
        </div>
      </div>
    </section>
  )
}

export default Endorsment