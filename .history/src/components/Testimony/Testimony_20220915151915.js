
const Testimony = () => {

  return (
    <section className="w-full my-28" id="temoignage">
      <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ce que mes clients disent de <span className="text-[#E73725]">moi</span></h2>
            <p className="mb-5 font-light sm:text-xl dark:text-gray-200 text-gray-500">Belle collaboration avec Axel, j'avais besoin de motivation et de conseils avisés pour progresser. Je suis vraiment content de travailler avec Axel. Le chemin est encore long mais nous sommes en bonne voie pour atteindre mon objectif de perte de poids.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between">
        <figure className="max-w-screen-md mx-auto">
              <svg className="h-12 mx-auto mb-3 text-[#E73725]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">"Une rencontre agréable avec un coach très professionnel. Il est à l'écoute afin de vous aider et de fixer des objectifs réalistes. Très bon conseils sur chaque mouvement. En résumé, un coach précis et vigilant au détails."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                  <div className="flex items-center divide-x-2 divide-[#E73725]">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">Anouk T.</div>
                      <div className="pl-3 text-sm font-semibold text-[#E73725]">Gymnaste</div>
                  </div>
              </figcaption>
          </figure>
          <figure className="max-w-screen-md mx-auto">
              <svg className="h-12 mx-auto mb-3 text-[#E73725]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">"Integer eleifend metus in vestibulum pulvinar. Aliquam a ex vel nulla ultrices vulputate ac quis lectus. Cras quis convallis lacus. Nulla ultrices vulputate."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile" />
                  <div className="flex items-center divide-x-2 divide-[#E73725]">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</div>
                      <div className="pl-3 text-sm font-semibold text-[#E73725]">CFO at Facebook</div>
                  </div>
              </figcaption>
          </figure>
          <figure className="max-w-screen-md mx-auto">
              <svg className="h-12 mx-auto mb-3 text-[#E73725]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec mauris id quam pharetra sodales et ut justo. Duis sit amet felis dolor."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="profile" />
                  <div className="flex items-center divide-x-2 divide-[#E73725]">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">Sofia McGuire</div>
                      <div className="pl-3 text-sm font-semibold text-[#E73725]">Influencer</div>
                  </div>
              </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Testimony;