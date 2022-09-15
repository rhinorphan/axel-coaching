import Hero from "../../assets/desktop/hero.jpg"

const Content = () => {

  return (
    <section class="my-14" id='a-propos'>
    <div class="container mx-auto xl:px-3 text-center xl:text-left w-[80%] xl:w-full">
      <div class="grid xl:grid-cols-2 flex items-center">
        <div class="mb-12">
          <div class="block rounded-lg shadow-lg px-6 py-12 md:px-10 lg:-mr-14 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 shadow-md">
            <h2 class="text-3xl font-bold mb-6">A la rencontre du <span className="text-gray-400">Coach</span></h2>
            <p class="dark:text-gray-200 text-gray-500 mb-6 pb-2 lg:pb-0">
            Je m'appelle <span className="font-bold">Axel</span>, coach sportif diplômé sur Bourgoin-Jallieu et en région lyonnaise. <br/> J'ai une Licence STAPS spécialité entrainement sportif, ainsi qu'un Master en préparation du sportif : aspects <span className="font-bold">Physique</span>, <span className="font-bold">Mentaux</span> et <span className="font-bold">Ré-athlétisation</span>. 
            Mon objectif est d'atteindre les vôtres ! <br/> Les programmes qui vous sont proposés sont totalement individualisés et adaptés à vos objectifs et besoins. Qu'ils soient de performance, esthétique ou encore de santé, nous atteindrons ces objectifs de la manière la plus optimale qui soit.
            </p>

            <div class="flex flex-col justify-around md:flex-row
            text-gray-800 text-sm xl:text-xs dark:text-gray-400 lg:justify-between mb-6 mx-auto">
              <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Coaching individuel
              </p>

              <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Réathlétisation
              </p>

              <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Préparation physique
              </p>

              <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Remise en forme
              </p>
            </div>

            <p class="dark:text-gray-200 text-gray-500 mb-0">
            Pour la conception de mes séances, je me base sur les dernières avancées scientifiques et technologiques afin de vous proposer un contenu optimal avec des résultats rapides. Je veille également à ce que mes séances soient totalement sûres, afin de réduire au maximum le risque de blessure. Chaque mouvement est réalisé avec une technique adéquate.<br/>
            Chaque séance commence par un échauffement approprié aux types d'effort. En fonction des objectifs, nous passerons différents tests qui nous permettrons de calibrer les séances en fonctions de vos capacités et d'observer votre progression au fur et à mesure des semaines.
            </p>
          </div>
        </div>
        <div>
          <img src={Hero} class="w-full rounded-lg hero2 shadow-md -z-1"
            alt="" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Content;