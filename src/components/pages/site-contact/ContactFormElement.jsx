
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function ContactFormElement() {
  return (
    <form className="p-8">

    <div className="md:flex xl:flex xl:max-w-xl flex-col gap-4">



      {/* <div class="flex">
        <input class="mr-2" type="text" placeholder="Input 1">
        <input class="ml-2" type="text" placeholder="Input 2">
      </div> */}
      
      <div className="flex gap-2">
        
        {/* nombres */}
        <div>
          <div className="mb-2 block ">
            <Label
              htmlFor="base"
              value="Nombres"
            />
          </div>
          <TextInput
            id="base"
            sizing=""
            type="text"
          />
        </div>

        {/* apellidos */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="base"
              value="Apellidos"
            />
          </div>
          <TextInput
            id="base"
            sizing=""
            type="text"
          />
        </div>
      </div>

      {/* numero teléfono */}
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
          type="number"
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
        />
      </div>


      {/* text area */}
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
        />
      </div>
    
      <Button type="submit" gradientDuoTone="purpleToBlue" className="mt-4">
        Enviar
      </Button>
    </div>



    </form>
  )
}


