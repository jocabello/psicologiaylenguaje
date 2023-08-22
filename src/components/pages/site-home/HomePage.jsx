import { Button, Card, Carousel } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

import AccordionElement from './AccordionElement';
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

      <div className='grid place-content-center mt-10 mb-10'>
        <NavLink to="contacto">
          <Button size="xl" gradientDuoTone="purpleToPink">¡Contáctanos y reserva tu hora!</Button>
        </NavLink>
      </div>

      <div className=" px-10 xl:mb-10 text-left mt-10 mb-5 flex justify-between">
        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Algunas Preguntas Frecuentes</h2>
        <NavLink className="mt-3 sm:mt-3 md:mt-2 xl:mt-2" to="preguntasyrespuestas">
          <Button size="md" pill gradientDuoTone="redToYellow">Conoce más Preguntas Frecuentes<HiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>
        </NavLink>
      </div>


      <div className='px-10 mb-10'>
        <AccordionElement />
      </div>

    </div>
  )
}
