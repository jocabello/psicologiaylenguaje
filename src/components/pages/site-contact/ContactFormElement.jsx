import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import { Button, Label, TextInput, Textarea, Checkbox } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function ContactFormElement() {

  const [buttonState, setbuttonState] = useState(true);
  
  const form = useRef();

  const sendEmail = (captchaValue) => {
    const params = {
      ...formState,
      'g-recaptcha-response': captchaValue,
    };

    emailjs.sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE, import.meta.env.VITE_EMAIL_JS_TEMPLATE, params, import.meta.env.VITE_EMAIL_JS_USER)
      .then(({ status }) => {
        console.log("EMAILJS SENT", status.code);
      }, (err) => {
        console.log("EMAILJS ERROR", err);
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

        <ReCAPTCHA
          sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
          className='flex justify-center'
          // onChange={()=>setbuttonState(!buttonState)}
          onChange={sendEmail}
        />

        {/* <Checkbox
          id="accept"
          onChange={()=>setbuttonState(!buttonState)}
        /> */}

        {/* <Button disabled={buttonState} type="submit" gradientDuoTone="purpleToBlue" className=""> */}
        <Button type="submit" gradientDuoTone="purpleToBlue" className="">
          Enviar
        </Button>
    </div>
    </form>
  )
}


