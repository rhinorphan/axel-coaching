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
        <div className="text-[18px] lg:text-[22px] font-bold cursor-pointer mr-4"><a href='https://www.axelcoaching.fr'>Axel Coaching</a></div>
        <label for="default-toggle" class="inline-flex relative items-center cursor-pointer mr-6">
            <input type="checkbox" value="" id="default-toggle" class="sr-only peer" onClick={() => toggleDarkMode(!isDarkMode)}/>
            <div class="w-11 h-6 bg-[#E73725]  peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-800 dark:peer-focus:ring-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {isDarkMode ? (
                <FaMoon size={"21px"} color="#E73725" className="cursor-pointer"/>
              ) : (
                <BsFillSunFill size={"22px"} color="#e9c46a" className="cursor-pointer"/>
              )}
              </span>
          </label>
      </div>
      <ul className=" md:flex md:gap-10 ml-auto text-[15px] lg:text-[18px] font-semibold ">
        { openMenu && isMobile ? (
          <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
        ) : (
          <>
            <li className="hover:text-[#E73725] transition-all duration-300 cursor-pointer"><a href="#a-propos">?? propos</a></li>
            <li className="hover:text-[#E73725] transition-all duration-300 cursor-pointer"><a href="#prix">Prix</a></li>
            <li className="hover:text-[#E73725] transition-all duration-300 cursor-pointer"><a href="#entreprise">Entreprise</a></li>
            <li className="hover:text-[#E73725] transition-all duration-300 cursor-pointer"><a href="#temoignage">T??moignage</a></li>
            <li className="hover:text-[#E73725] transition-all duration-300 cursor-pointer"><a href="#faq">FAQ</a></li>
            <li className="hover:text-[#E73725] transition-all duration-300 cursor-pointer ml-8 lg:ml-20"><a href="#contact">Contact</a></li>
          </>
        )}
        { openMenu && (
          <div className="absolute right-8 dark:glassmorphism backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 rounded-xl p-4 text-center text-[13px] justify-center content-evenly dark:text-gray-100 text-gray-800 font-semibold z-50">
            <li className="cursor-pointer my-2 hover:text-[#E73725] transition-all duration-300"><a href="#a-propos" onClick={handleMenu}>?? propos</a></li>
            <li className="cursor-pointer my-2 hover:text-[#E73725] transition-all duration-300"><a href="#prix" onClick={handleMenu}>Prix</a></li>
            <li className="cursor-pointer my-2 hover:text-[#E73725] transition-all duration-300"><a href="#entreprise" onClick={handleMenu}>Entreprise</a></li>
            <li className="cursor-pointer my-2 hover:text-[#E73725] transition-all duration-300"><a href="#temoignage" onClick={handleMenu}>T??moignage</a></li>
            <li className="cursor-pointer my-2 hover:text-[#E73725] transition-all duration-300"><a href="#faq" onClick={handleMenu}>FAQ</a></li>
            <li className="cursor-pointer my-2 hover:text-[#E73725] transition-all duration-300"><a href="#contact" onClick={handleMenu}>Contact</a></li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;