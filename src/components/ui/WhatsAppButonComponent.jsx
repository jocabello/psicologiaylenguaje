import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButonComponent() {
  return (
    <>
      <a 
        className="fixed z-90 bottom-10 right-8 bg-[#25D366] w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#128C7E] hover:drop-shadow-2xl hover:animate-pulse duration-500 hover:cursor-pointer"
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_PHONE_NO}`}
      >
        <FaWhatsapp />
      </a>
    </>
  )
}
