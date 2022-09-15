import Trainer from "../../assets/desktop/trainer.svg"

const Testimony = () => {

  return (
    <section class="w-full my-28" id="temoignage">
      <div class="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ce que mes client disent de <span className="text-gray-400">moi</span></h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec mauris id quam pharetra sodales et ut justo. Duis sit amet felis dolor. </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between">
        <figure class="max-w-screen-md mx-auto">
              <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                  <p class="text-2xl font-medium text-gray-900 dark:text-white">"Vivamus at libero ullamcorper, porttitor felis eget, malesuada quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-400">
                      <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                      <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                  </div>
              </figcaption>
          </figure>
          <figure class="max-w-screen-md mx-auto">
              <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                  <p class="text-2xl font-medium text-gray-900 dark:text-white">"Integer eleifend metus in vestibulum pulvinar. Aliquam a ex vel nulla ultrices vulputate ac quis lectus. Cras quis convallis lacus. Nulla ultrices vulputate."</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</div>
                      <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CFO at Facebook</div>
                  </div>
              </figcaption>
          </figure>
          <figure class="max-w-screen-md mx-auto">
              <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                  <p class="text-2xl font-medium text-gray-900 dark:text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec mauris id quam pharetra sodales et ut justo. Duis sit amet felis dolor."</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="profile picture" />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-gray-900 dark:text-white">Sofia McGuire</div>
                      <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-600">Influencer</div>
                  </div>
              </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Testimony;