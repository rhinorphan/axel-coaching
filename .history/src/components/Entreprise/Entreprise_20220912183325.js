import Team from '../../assets/desktop/entreprise.jpeg'

function Entreprise() {
  return (
    <section className="text-center" id='entreprise'>
        <div className="py-8 gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full rounded-lg hero2 shadow-md" src={Team} alt="Team Work" />
            <div className="mt-10 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pourquoi le coaching en entreprise ?</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-200 text-justify">De nombreuses sociétés utilisent maintenant le sport pour stimuler leurs équipes. C'est un moyen extrêmement efficace pour établir des liens mais aussi pour améliorer les performances au travail et réduire l'absentéisme (diminution des accidents de travail, augmentation de l'investissement des collaborateurs…)
                <br/><br/>
                Les coachings se déroulent au sein de vos locaux ou dans un espace extérieur proche. Le matériel est pris en charge par le coach. Cette offre vous intéresse ? Contactez-moi par mail en précisant l'adresse de l'entreprise, le nombre de collaborateurs et le nombre de cours souhaités (ou le temps d'intervention). Un devis vous sera fournit sous 48 h.</p>
                <a href="#contact" className="flex items-center bg-gray-800 dark:bg-white shadow-md text-[#FFFFFF] dark:text-[#E73725] dark:hover:bg-[#E73725] dark:hover:text-white hover:bg-[#E73725] rounded-full transition-all duration-300 font-medium  text-sm px-5 py-2.5 text-center w-44 mx-auto">
                    Ça m’intéresse
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Entreprise