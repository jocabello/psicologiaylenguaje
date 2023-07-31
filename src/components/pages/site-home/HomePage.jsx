import { Button, Card, Carousel } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

import AccordionElement from './AccordionElement';
import QuoteElement from './QuoteElement';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='xl:px-28'>
      <div className='h-96 px-10 xl:mt-8 xl:mb-5'>
        <Carousel slideInterval={7000} className=''>
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

      {/* <div className='pt-6 px-10 text-lg text-gray-700/90'>
        <p>
          Mi trabajo como Psicóloga , por mi experiencia y larga historia de vida ha ido acumulando
          diversas miradas teóricas a través de los años , tales como el Psicoanálisis freudiano, junguiano y
          lacaniano y especialmente, en la terapia infantil , la escucha dinámica de Fracoise Dolto.
          Sin embargo, como la vida es un aprendizaje permanente, ya que a eso hemos venido,
          actualmente me he asomado a la fuente de toda ciencia y he llegado a concluir que todo lo
          llamado enfermedad psíquica que se manifiesta en diversas sintomatologías clasificadas en
          diversas nomenclaturas tales como : depresión, ansiedad, trastornos de personalidad, crisis de
          pánico , de identidad, dependencias , etc. Toda esta multiplicidad sintómatica corresponde a un
          grito desesperado del Alma impedida de ser feliz por la dificultad para encontrar el sentido de su
          existir.
          La propuesta psicológica que les hago esta enfocada en acompañar e iluminar las palabras de la
          historia de vida que cada paciente traiga a objeto de elevar los niveles de conciencia que puedan
          permitir encontrar la paz, el sentido de su vida y la felicidad como estado y no como fin.
          Mi nombre es Ana. Nací en Chile, estudié fonoaudiología en el crepúsculo de los años 70. Viví en
          Suecia, trabajé como logopeda en el hospital central de una ciudad cercana a Estocolmo. Volví a
          Chile, estudie psicología y actualmente realizo un diplomado en la Escuela Psicología y Cabala en
          España, cuyo director es el Doctor Mario Javier Saban.
          A su servicio estoy en los días y horas dispuestas en esta página
        </p>
      </div> */}

      <QuoteElement />
      
      {/* <div className='pt-6 px-8 text-2xl font-bold text-center text-gray-700/90'>
        <p>Conoce nuestro servicios</p>
      </div> */}

      <div className=" text-center mt-10 mb-5 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce nuestros servicios</h2>
      </div>

        


      {/* CARDS */}

      <div className='lg:flex px-10 xl:mt-5'>
        
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
            <Button gradientDuoTone="greenToBlue"  >
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
            <Button gradientDuoTone="greenToBlue">
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
            <Button gradientDuoTone="greenToBlue">
              <p>
                Conoce más
              </p>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>

      </div>

      <div className='grid place-content-center mt-10 mb-10'>
        <NavLink to="contacto">
          <Button size="xl" gradientDuoTone="purpleToPink">¡Contáctanos y reserva tu hora!</Button>
        </NavLink>
      </div>

      <div className='px-10 mb-10'>
        <AccordionElement />
      </div>

    </div>
  )
}
