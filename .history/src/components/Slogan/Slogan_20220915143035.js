import Trainer from "../../assets/desktop/hero2.jpg"

const Slogan = () => {

  return (
    <section className="text-[36px] relative my-2 font-extrabold md:flex md:justify-evenly md:items-center md:text-[43px] h-screen">
      <div className="text-center mt-24 md:mt md:mt-0 md:col-span-1 md:col-start-2 md:min-w-[35%] mr-2">
        <p>
          Ne limitez pas  <span className="text-[#E73725]">vos</span> défis, défiez vos <span className="text-[#E73725]">limites</span>
        </p>
        <button className="text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-gray-800 dark:bg-[#E73725] shadow-md dark:shadow-dk text-[#FFFFFF] dark:text-white dark:hover:bg-white dark:hover:text-[#E73725] hover:bg-[#E73725] rounded-full transition-all duration-300 cursor-pointer">
          <a href="#a-propos">En savoir plus</a>
        </button>
      </div>
      <div className="mt-[100px] relative md:mt-0 flex justify-center">
        <img src={Trainer} alt="people training" className="hero2 shadow-md w-[40rem]" />
      </div>
    </section>
  );
}

export default Slogan;