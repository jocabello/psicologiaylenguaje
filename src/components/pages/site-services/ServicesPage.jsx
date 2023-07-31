import CardsElements from "./CardsElements";

export default function ServicesPage() {
  return (
    <div>

      <div className=" text-center mt-10 mb-5 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce nuestros servicios</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
          suspendisse.
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        <CardsElements />
      </div>

    </div>

  )
}
