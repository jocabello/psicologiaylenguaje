import { Button, Card, Carousel } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { FaArrowRightLong } from "react-icons/fa6"
import AccordionElement from './AccordionElement';

export default function HomePage() {
  return (
    <>
      <div className='h-96 px-10'>
        <Carousel slideInterval={5000}>
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
        </Carousel>
      </div>

      <div className='pt-6 px-10 text-lg text-gray-700/90'>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.</p>
      </div>
      
      <div className='pt-6 px-8 text-2xl text-center text-gray-700/90'>
        <p>Conoce nuestro servicios</p>
      </div>



      {/* CARDS */}

      <div className='lg:flex px-10'>
        
        <div  className='pt-6 pl-6 pr-6'>
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/img1.png"
            
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Psicología
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button>
              <p>
                Conoce más
              </p>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>

        <div className='pt-6 pl-6 pr-6'>
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/img1.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Fonoaudiología
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button>
              <p>
                Conoce más
              </p>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>

        <div className='pt-6 pl-6 pr-6'>
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/img1.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Terapia alternativa
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button>
              <p>
                Conoce más
              </p>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>

      </div>

      <div className='grid place-content-center mt-10 mb-10'>
        <Button size="xl" gradientDuoTone="purpleToBlue">¡Contáctanos y reserva tu hora!</Button>
      </div>

      <div className='px-10 mb-10'>
        <AccordionElement />
      </div>

    </>
  )
}
