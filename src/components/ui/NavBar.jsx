import { Button } from 'flowbite-react';

import { useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const logoImgUrl = new URL('/logo/PeiColor.png', import.meta.url).href

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#caf0f8]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5 flex">
            <span className="sr-only">Psicología y Lenguaje</span>
            <img className="h-8 w-auto" src={logoImgUrl} alt="" />
            <span className="pl-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Psicología y Lenguaje
            </span>
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <NavLink to="contacto" className="pr-2">
            <Button gradientDuoTone="greenToBlue">
              ¡Contáctanos!
            </Button>
          </NavLink>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          
          <NavLink to="/">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Inicio
            </p>
          </NavLink>
          <NavLink to="servicios">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Servicios
            </p>
          </NavLink>
          <NavLink to="quienessomos">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Quienes Somos
            </p>
          </NavLink>
          <NavLink to="contacto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Contacto
            </p>
          </NavLink>
          <NavLink to="preguntasyrespuestas">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Preguntas Frecuentes
            </p>
          </NavLink>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="contacto" className="pr-1">
            <Button gradientDuoTone="greenToBlue">
              ¡Contáctanos!
            </Button>
          </NavLink>
        </div>

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Psicología y Lenguaje</span>
              <img
                className="h-8 w-auto"
                src={logoImgUrl}
                alt=""
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              
                <NavLink to="/" onClick={()=>setMobileMenuOpen(false)}>
                  <p
                    
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Inicio
                  </p>
                </NavLink>
                <NavLink to="servicios" onClick={()=>setMobileMenuOpen(false)}>
                  <p
                    
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Servicios
                  </p>
                </NavLink>
                <NavLink to="quienessomos" onClick={()=>setMobileMenuOpen(false)}>
                  <p
                    
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Quienes Somos
                  </p>
                </NavLink>
                <NavLink to="contacto" onClick={()=>setMobileMenuOpen(false)}>
                  <p
                    
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contacto
                  </p>
                </NavLink>
                <NavLink to="preguntasyrespuestas" onClick={()=>setMobileMenuOpen(false)}>
                  <p
                    
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Preguntas Frecuentes
                  </p>
                </NavLink>
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
