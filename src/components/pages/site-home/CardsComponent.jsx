import { Button, Card } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { HiOutlineArrowRight } from 'react-icons/hi';

export default function CardsComponent() {
  return (
    <div className='lg:flex sm:px-20 xl:px-10 xl:mt-5 items-stretch'>
        
        {/* c1 */}
        <div  className='flex-1 pt-6 pl-6 pr-6'>
            <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            // imgSrc="./cards/card_psyc.jpg"
            imgSrc="./cards/card_psyc.jpg"
            className='h-full'

            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                <p>
                Psicología cabalística
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify xl:h-full ">
                Encuentra apoyo emocional y equilibrio en nuestro servicio de psicología. Terapeutas compasivos y enfoques basados en evidencia te guiarán hacia una mente sana y una vida plena.
            </p>
            <NavLink to="servicios">
                <Button className="w-full" gradientDuoTone="greenToBlue">
                <p>
                    Conoce más
                </p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </NavLink>
            </Card>
        </div>

        {/* c2 */}
        <div className='flex-1 pt-6 pl-6 pr-6'>
            <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./cards/card_leng.jpg"
            className='h-full'
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                <p>
                Fonoaudiología
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify xl:h-full">
                Mejora tus habilidades de comunicación con nuestros fonoaudiólogos especializados. Desde el desarrollo infantil hasta la fluidez en adultos, desbloquea tu potencial para una comunicación efectiva.
            </p>
            <NavLink to="servicios">
                <Button className="w-full" gradientDuoTone="greenToBlue">
                <p>
                    Conoce más
                </p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </NavLink>
            </Card>
        </div>

        {/* c3  */}
        <div className='flex-1 pt-6 pl-6 pr-6'>
        {/* <img className="h-40 w-40 rounded-full" src={selectedPerson.imageUrl} alt="" /> */}
            {/* <Card renderImage={() => {<Image width={500} height={500} src="/img1.png" />}}> */}
            <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            // imgSrc="./cards/card_con.jpg"
            imgSrc="./cards/card_con.jpg"
            className='h-full'
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                <p>
                Consejería, sexualidad y educación
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify xl:h-full ">
                Explora una sanación integral con nuestras terapias alternativas. Desde acupuntura hasta reiki, descubre cómo equilibrar mente, cuerpo y espíritu para alcanzar bienestar y armonía duraderos.
            </p>
            <NavLink to="servicios">
                <Button className="w-full" gradientDuoTone="greenToBlue">
                <p>
                    Conoce más
                </p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </NavLink>
            </Card>
        </div>

    </div>
  )
}
