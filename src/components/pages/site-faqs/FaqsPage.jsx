import BigAccordionElement from "./BigAccordionElement";

export default function FaqsPage() {
  return (
    <div className="xl:px-40">

      {/* <div className='pt-6 px-8 text-2xl font-bold  text-gray-700/90'>
        <p>Preguntas Frecuentes</p>
      </div> */}

      <div className=" text-center mt-10 mb-5 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preguntas frecuentes</h2>
        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
          suspendisse.
        </p> */}
      </div>

      <div className=" p-8 ">
        <BigAccordionElement /> 
      </div>



    </div>
  )
}
