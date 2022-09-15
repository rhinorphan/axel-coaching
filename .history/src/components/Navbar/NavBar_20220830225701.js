import { useState } from 'react';
import {BsFillSunFill} from 'react-icons/bs';
import {FaMoon} from 'react-icons/fa';
import {HiOutlineMenu} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';
import useDarkMode from '../../useDarkMode';

const NavBar = (props) => {
  
  const {isMobile} = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-[20px] font-bold cursor-pointer"><a href='#'>Axel Coaching</a></div>
        {isDarkMode ? (
          <BsFillSunFill size={"24px"} color="#e9c46a" className="cursor-pointer mx-3" onClick={() => toggleDarkMode(!isDarkMode)} />
        ) : (
          <FaMoon size={"24px"} color="#D1D5DB" className="cursor-pointer mx-3" onClick={() => toggleDarkMode(!isDarkMode)} />
        )}
      </div>
      <ul className=" md:flex md:gap-10 ml-auto text-[18px] font-semibold ">
        { openMenu && isMobile ? (
          <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
        ) : (
          <>
            <li className="hover:text-gray-500 transition-all duration-300 cursor-pointer"><a href="#a-propos">À propos</a></li>
            <li className="hover:text-gray-500 transition-all duration-300 cursor-pointer"><a href="#prix">Prix</a></li>
            <li className="hover:text-gray-500 transition-all duration-300 cursor-pointer"><a href="#temoignage">Témoignage</a></li>
            <li className="hover:text-gray-500 transition-all duration-300 cursor-pointer ml-28"><a href="#contact">Contact</a></li>
          </>
        )}
        { openMenu && (
          <div className="absolute right-8 dark:bg-white bg-gray-300 p-8 text-center text-[13px] dark:text-gray-500 text-gray-800 font-semibold z-50">
            <li className="cursor-pointer my-2"><a href="#a-propos" onClick={handleMenu}>À propos</a></li>
            <li className="cursor-pointer my-2"><a href="#prix" onClick={handleMenu}>Prix</a></li>
            <li className="cursor-pointer my-2"><a href="#temoignage" onClick={handleMenu}>Témoignage</a></li>
            <li className="cursor-pointer my-2"><a href="#contact" onClick={handleMenu}>Contact</a></li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;