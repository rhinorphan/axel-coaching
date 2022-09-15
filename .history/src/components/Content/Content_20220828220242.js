import {CgGym} from 'react-icons/cg';
import {GiGymBag} from 'react-icons/gi';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {MdSportsRugby} from 'react-icons/md';
import {UseSpring, animated, useSpring} from '@react-spring/web';

const Content = () => {

  const training = useSpring({ trainings: 50, from: { trainings: 0 }, config: {duration: 1500}});
  const classe = useSpring({ classes: 17, from: { classes: 0 }, config: {duration: 1500}});
  const club = useSpring({ clubs: 5, from: { clubs: 0 }, config: {duration: 1500}});

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start w-full h-fit justify-evenly py-40" id="a-propos">
      <div className="md:ml-[10%] font-bold items-center bg-gradient-to-b shadow-md from-white/60 to-transparent rounded-3xl md:min-w-fit md:min-h-fit">
        <div className="mt-16 gap-8 flex items-center mx-8">
          <CgGym className="mt-[12px] text-5xl md:text-7xl"/>
          <div className="text-[26px] md:text-[36px]">
            <div className="flex flex-row">
            <animated.div>
              {training.trainings.to((val)=>Math.floor(val))}
            </animated.div>
            +
            </div>
            <p className="text-[13px] md:text-[23px] font-semibold">
              Entraînements
            </p>
          </div>
        </div>
        <div className="mt-8 gap-8 flex items-center mx-8">
          <GiGymBag className="mt-[12px] text-5xl md:text-7xl"/>
          <div className="text-[26px] md:text-[36px]">
            <div className="flex flex-row">
              <animated.div>
                {classe.classes.to((val)=>Math.floor(val))}
              </animated.div>
            </div>
            <p className="text-[13px] md:text-[23px] font-semibold">
              Loris ipsum lor
            </p>
          </div>
        </div>
        <div className="mt-8 mb-16 gap-8 flex items-center mx-8">
          <MdSportsRugby className="mt-[12px] text-5xl md:text-7xl"/>
          <div className="text-[26px] md:text-[36px]">
            <div className="flex flex-row">
              <animated.div>
                {club.clubs.to((val)=>Math.floor(val))}
              </animated.div>
            </div>
            <p className="text-[13px] md:text-[23px] font-semibold">
              Loris ipsum lor
            </p>
          </div>
        </div>
      </div>
      <div className="text-[12px] md:text-[15px] flex flex-col mt-[100px] font-semibold items-center">
        <div className="flex gap-8 ml-[70px] mr-[29px] items-center my-2">
          <BsFillCheckCircleFill className="text-3xl md:text-4xl"/>
          <p>Etiam tempor, sem eget accumsan mollis, etiam tempor! Sem eget accumsan mollis</p>
        </div>
        <div className="flex gap-8 ml-[70px] mr-[29px] items-center my-2">
          <BsFillCheckCircleFill className="text-3xl md:text-4xl"/>
          <p>Etiam tempor, sem eget accumsan mollis, etiam tempor! Sem eget accumsan mollis</p>
        </div>
        <div className="flex gap-8 ml-[70px] mr-[29px] items-center my-2">
          <BsFillCheckCircleFill className="text-3xl md:text-4xl"/>
          <p>Etiam tempor, sem eget accumsan mollis, etiam tempor! Sem eget accumsan mollis</p>
        </div>
        <div className="flex gap-8 ml-[70px] mr-[29px] items-center my-2">
          <BsFillCheckCircleFill className="text-3xl md:text-4xl"/>
          <p>Etiam tempor, sem eget accumsan mollis, etiam tempor! Sem eget accumsan mollis</p>
        </div>
      </div>
    </section>
  );
}

export default Content;