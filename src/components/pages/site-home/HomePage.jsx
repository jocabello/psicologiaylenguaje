import { Button, Card, Carousel } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

import QuoteElement from './QuoteElement';
import { NavLink } from 'react-router-dom';
import CardsComponent from './CardsComponent';

export default function HomePage() {
  return (
    <div className='xl:px-28'>

      <div className='h-96 px-10 mt-3 md:mt-8 xl:mt-8 xl:mb-5'>
        <Carousel slideInterval={7000} className=''>
          <img
            alt="..."
            src='./carousel/carr5.jpg'
          />
          <img
            alt="..."
            src='./carousel/carr2.jpeg'
          />
          <img
            alt="..."
            src='./carousel/carr3.jpeg'
          />
          <img
            alt="..."
            src='./carousel/carr4.jpeg'
          />
        </Carousel>
      </div>

      <QuoteElement />

      <div className=" text-center mt-10 mb-5 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce nuestros servicios</h2>
      </div>

      <CardsComponent />

      <div className='pt-10 xl:pt-20 grid place-content-center'>
        <NavLink to="contacto">
          <Button size="xl" gradientDuoTone="purpleToPink">¡Contáctanos y reserva tu hora!</Button>
        </NavLink>
      </div>

      <div className="xl:py-10 px-10 xl:mb-10 text-center mt-10 mb-5 ">
        <p className="mb-5 text-3xl text-gray-900 sm:text-4xl">Visita nuestra sección de preguntas frecuentes</p>
        <p className="mx-auto max-w-7xl items-center  mb-10 text-2xl italic font-medium text-gray-600 dark:text-white">¿Cuál es el abordaje terapéutico de la psicología cabalística ? ¿Qué es un trastorno fonológico? ¿Qué es la consejería? ¿Qué esperar del lenguaje a los tres años?</p>
        <NavLink className="pb-5 grid place-content-center content-center" to="preguntasyrespuestas">
          <Button size="md" pill gradientDuoTone="redToYellow">Conoce más<HiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>
        </NavLink>
      </div>

    </div>
  )
}
