import { Button, Card, Carousel } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

import AccordionElement from './AccordionElement';
import QuoteElement from './QuoteElement';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='xl:px-28'>
      <div className='h-96 px-10 mt-3 md:mt-8 xl:mt-8 xl:mb-5'>
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

      <QuoteElement />

      <div className=" text-center mt-10 mb-5 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce nuestros servicios</h2>
      </div>

        


      {/* CARDS */}

      <div className='lg:flex px-10 xl:mt-5'>
        
        <div  className='pt-6 pl-6 pr-6'>
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/img1.png"
            className='xl:max-w-7xl'
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Psicología
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify xl:h-32">
              Encuentra apoyo emocional y equilibrio en nuestro servicio de psicología. Terapeutas compasivos y enfoques basados en evidencia te guiarán hacia una mente sana y una vida plena.
            </p>
            <Button gradientDuoTone="greenToBlue"  >
              <p>
                Conoce más
              </p>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>

        {/* c2 */}
        <div className='pt-6 pl-6 pr-6'>
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/img1.png"
            className='max-w-7xl'
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Fonoaudiología
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify xl:h-32">
              Mejora tus habilidades de comunicación con nuestros fonoaudiólogos especializados. Desde el desarrollo infantil hasta la fluidez en adultos, desbloquea tu potencial para una comunicación efectiva.
            </p>
            <Button gradientDuoTone="greenToBlue">
              <p>
                Conoce más
              </p>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>

        {/* c3  */}
        <div className='pt-6 pl-6 pr-6'>
        {/* <img className="h-40 w-40 rounded-full" src={selectedPerson.imageUrl} alt="" /> */}
          {/* <Card renderImage={() => {<Image width={500} height={500} src="/img1.png" />}}> */}
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/img1.png"
            className='max-w-7xl'
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Terapia alternativa
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify xl:h-32">
              Explora una sanación integral con nuestras terapias alternativas. Desde acupuntura hasta reiki, descubre cómo equilibrar mente, cuerpo y espíritu para alcanzar bienestar y armonía duraderos.
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

      <div className=" px-10 xl:mb-10 text-left mt-10 mb-5 flex justify-between">
        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Algunas Preguntas Frecuentes</h2>
        <NavLink to="preguntasyrespuestas">
          <Button size="md" pill gradientDuoTone="redToYellow">Conoce más Preguntas Frecuentes<HiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>
        </NavLink>
      </div>


      <div className='px-10 mb-10'>
        <AccordionElement />
      </div>

    </div>
  )
}
