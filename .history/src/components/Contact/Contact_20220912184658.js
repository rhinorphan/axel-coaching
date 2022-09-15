import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import party from "party-js";

function Contact() {

  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_boxmqdl', 'template_zlbjyo2', form.current, '4QWpwWp_TI28hRNyX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "Votre message m'a bien été envoyé!",
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };

  setTimeout(() => {
    var surprise = document.querySelector(".button");

    surprise.addEventListener("click", function (e) {
      party.confetti(surprise, {count: party.variation.range(20, 40)});
  });}, 500)

  return (
    <section class="my-14" id='contact'>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md dark:glassmorphism rounded-2xl backdrop-blur-lg backdrop-opacity-100 backdrop-contrast-75 shadow-md md:px-6">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800 dark:text-white"><span className='text-[#E73725]'>Me</span> contacter</h2>
      <p class="mb-8 lg:mb-16 font-light text-center dark:text-gray-300 text-gray-800 sm:text-xl">N'hésitez pas à me contacter afin de discuter de vos attentes, d'effectuer un bilan complet et de réaliser notre première séance d'essai ensemble. </p>
      <form action="#" class="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Votre nom</label>
            <input type="text" id="name" 
            name="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Prénom Nom" required />
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Votre e-mail</label>
              <input type="email" id="email"
              name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="adresse@email.fr" required />
          </div>
          <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Votre numéro de téléphone</label>
              <input type="number" id="phone"
              name="phone" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Numéro de téléphone" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Votre message</label>
              <textarea id="message" rows="6" name='message' class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Comment puis-je vous aider..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center dark:text-gray-100text-gray-800 rounded-lg text-gray-800 bg-gray-400 dark:hover:bg-gray-500 hover:bg-gray-200  dark:hover:text-gray-800 hover:text-gray-700 transition-all duration-300 sm:w-fit dark:text-gray-100 button">Envoyer</button>
      </form>
  </div>
</section>
  )
}

export default Contact