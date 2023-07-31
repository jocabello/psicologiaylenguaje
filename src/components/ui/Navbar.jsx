
import { Button, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      rounded
      className='bg-[#caf0f8]'
      // className='bg-[#FFEEDD]'
    >
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Psicología y Lenguaje
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <NavLink to="contacto">
          <Button gradientDuoTone="greenToBlue">
            ¡Contáctanos!
          </Button>
        </NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/">
          Inicio
        </NavLink>
        <NavLink to="servicios">
          Servicios
        </NavLink>
        <NavLink to="quienessomos">
          Quienes Somos
        </NavLink>
        <NavLink to="contacto">
          Contacto
        </NavLink>
        <NavLink to="preguntasyrespuestas">
          Preguntas Frecuentes
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}


