import ContactFormElement from "./ContactFormElement";


export default function ContactPage() {
  return (
    <>

      <div className='h-96 px-10 mb-3 mt-3'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.3508863900329!2d-70.65350525500652!3d-33.436652743121414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a4b8ea475b%3A0xff5cd7285775682c!2sServicios%20Informaticos%20Para%20El%20Comercio%20Limitada!5e0!3m2!1sen!2scl!4v1689633419190!5m2!1sen!2scl" 
          width="100%"
          height="100%"
          style={{border:0}} 
          // allowfullscreen="true"
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
        {/* <div></div> */}
        <ContactFormElement />
        {/* <div></div> */}
      </div>


    </>
  )
}
