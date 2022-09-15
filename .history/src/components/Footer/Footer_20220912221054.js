import React from 'react'
import Img from "../../assets/desktop/salp.png";
import {SiTailwindcss} from 'react-icons/si';


function Footer() {
  return (
    <footer class="text-center">
        <div className='flex justify-center'>
          <a href="https://www.servicesalapersonne.gouv.fr/" className='cursor-pointer'>
            <img src={Img} alt="" className='w-48' />
          </a>
        </div>
        <div class="flex justify-center items-center p-4 mt-14 max-w-3xl mx-auto gap-20">
          <a href="https://www.linkedin.com/in/axel-duchene-28bab9239" class="text-gray-800 dark:text-white hover:text-[#E73725]">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              class="svg-inline--fa fa-linkedin-in w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
        </div>
      <div className='flex justify-center text-xs lg:text-sm mx-auto max-w-3xl font-semibold mt-2'>Site codé avec <span className='mx-1'><SiTailwindcss/></span> par  <a href='https://axeltarifa.dev' className='ml-1 hover:text-[#E73725]'> Axel Tarifa</a></div>
      <div class="flex justify-center text-md mx-auto max-w-3xl font-semibold mt-2">
        © 2022 Copyright :
        <a class="font-bold hover:text-[#E73725] ml-1" href="https://www.axelcoaching.fr/"> Axel Coaching</a>
      </div>
      
    </footer>
  )
}

export default Footer