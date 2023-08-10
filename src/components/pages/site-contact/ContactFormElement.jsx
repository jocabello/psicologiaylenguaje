import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function ContactFormElement() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_281c1ff', 'template_pa01k8h', form.current, 'Pu9qYYI76mbvqiars')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="p-8" ref={form} onSubmit={sendEmail}>
      <div className="md:flex xl:flex xl:max-w-xl flex-col gap-4">
        <div className="flex gap-2">
          {/* nombre completo */}
          <div>
            <div className="mb-2 block ">
              <Label
                htmlFor="base"
                value="Nombre completo"
              />
            </div>
            <TextInput
              id="base"
              sizing=""
              type="text"
              name="form_fullname"
            />
          </div>
          {/* teléfono */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="base"
                value="Número de contacto"
              />
            </div>
            <TextInput
              id="base"
              sizing=""
              type="text"
              placeholder="+569 5555 55 55"
              name='form_phone'
            />
          </div>
        </div>
        {/* asunto*/}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="base"
              value="Asunto de su mensaje"
            />
          </div>
          <TextInput
            id="base"
            sizing=""
            type="text"
            placeholder="Ej: Reserva de hora para Fonoaudiología"
            name='form_subject'
          />
        </div>
        {/* email */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Correo electrónico"
            />
          </div>
          <TextInput
            icon={HiMail}
            id="email1"
            placeholder="tucorreo@email.com"
            required
            type="email"
            name='form_email'
          />
        </div>
        {/* message */}
        <div
          className=""
          id="textarea"
        >
          <div className="mb-2 block">
            <Label
              htmlFor="comment"
              value="Escribe tu mensaje"
            />
          </div>
          <Textarea
            id="comment"
            placeholder="Mensaje..."
            required
            rows={4}
            name='form_message'
          />
        </div>
      
        <Button type="submit" gradientDuoTone="purpleToBlue" className="mt-4">
          Enviar
        </Button>
    </div>
    </form>
  )
}


