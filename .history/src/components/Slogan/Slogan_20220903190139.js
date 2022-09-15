import Trainer from "../../assets/desktop/hero2.jpeg"

const Slogan = () => {

  return (
    <section className="text-[36px] relative my-8 font-extrabold md:flex md:justify-evenly md:items-center md:text-[43px] h-screen">
      <div className="text-center mt-24 md:mt md:mt-0 md:col-span-1 md:col-start-2 min-w-[40%]">
        <p>
          Dépense <span className="text-gray-400">Toi</span>
        </p>
        <p className="">Correctement</p>
        <button className="text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-gray-400 dark:hover:bg-gray-500 hover:bg-gray-300 rounded-full">
          <a href="#a-propos">En savoir plus</a>
        </button>
      </div>
      <div className="mt-[100px] relative md:mt-0 flex justify-center md:right-[-5rem]">
        <img src={Trainer} alt="people training" className="hero2 shadow-md" />
      </div>
    </section>
  );
}

export default Slogan;