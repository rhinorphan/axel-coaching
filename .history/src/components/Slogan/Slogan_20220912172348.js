import Trainer from "../../assets/desktop/hero2.jpg"

const Slogan = () => {

  return (
    <section className="text-[36px] relative my-2 font-extrabold md:flex md:justify-evenly md:items-center md:text-[43px] h-screen">
      <div className="text-center mt-24 md:mt md:mt-0 md:col-span-1 md:col-start-2 md:min-w-[35%] mr-2">
        <p>
          Ne limitez pas  <span className="text-[#E73725]">vos</span> défis, défiez vos <span className="text-gray-400">limites</span>
        </p>
        <button className="text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-[#E73725] text-[#FFFFFF] dark:hover:bg-gray-500 hover:bg-orange-500 rounded-full">
          <a href="#a-propos">En savoir plus</a>
        </button>
      </div>
      <div className="mt-[100px] relative md:mt-0 flex justify-center">
        <img src={Trainer} alt="people training" className="hero2 shadow-md max-h-[1150px]" />
      </div>
    </section>
  );
}

export default Slogan;