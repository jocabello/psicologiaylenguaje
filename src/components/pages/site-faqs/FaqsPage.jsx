import BigAccordionElement from "./BigAccordionElement";

export default function FaqsPage() {
  return (
    <div className="xl:px-40">

      <div className=" text-center mt-10 mb-5 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preguntas frecuentes</h2>
      </div>

      <div className=" p-8 ">
        <BigAccordionElement /> 
      </div>
      
    </div>
  )
}
