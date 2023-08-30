import ContactFormElement from "./ContactFormElement";


export default function ContactPage() {
  return (
    <div className="mt-3">

      <div className='h-96 px-10 mb-3'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.1617773972835!2d-70.60069862337431!3d-33.41902639590513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6b2945b099%3A0xc70d7b8e0e1195b4!2sCallao%202970%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1693419905938!5m2!1sen!2scl" 
          width="100%"
          height="100%"
          style={{border:0}}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className=" text-center mt-10 mb-5 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contáctanos</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Escríbenos para agendar tu hora o resolver dudas.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center">
        <ContactFormElement />
      </div>


    </div>
  )
}
