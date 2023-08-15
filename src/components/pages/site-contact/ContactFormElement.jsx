import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function ContactFormElement() {

  const [buttonState, setbuttonState] = useState(false);
  
  const form = useRef();
  const refCaptcha = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(refCaptcha.current.getValue()){
      emailjs.sendForm(
          import.meta.env.VITE_EMAIL_JS_SERVICE, 
          import.meta.env.VITE_EMAIL_JS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAIL_JS_USER,
        )
        .then(({ status }) => {
          
          console.log("EMAILJS SENT", status);
          
        }, (err) => {
          console.log("EMAILJS ERROR", err);
        });
    }else{
      // aletar de validar captcha
    }
  };

  const handleReCaptcha = () => {
    const token = refCaptcha.current.getValue();
    if(refCaptcha.current.getValue()){
      setbuttonState(true)
    }else{
      setbuttonState(false)
    }
  };

  return (
    <form className="p-8" ref={form} onSubmit={handleSubmit}>
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
              required
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
            required
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

        <ReCAPTCHA
          sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
          className='flex justify-center'
          ref={refCaptcha}
          onChange={handleReCaptcha}
          hl='es-419'
        />

        <Button disabled={!buttonState} type="submit" gradientDuoTone="purpleToBlue" className="">Enviar</Button>
      </div>
    </form>
  )
}


