import { Outlet, ScrollRestoration } from "react-router-dom"
import FooterWithSocialMediaIcons from "./Footer"
import NavBar from "./NavBar"
import WhatsAppButonComponent from "./WhatsAppButonComponent"


export default function RootLayout() {
  return (
    // <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
    <div className="flex flex-col h-screen">
        <NavBar />
        <main className="bg-[#F8F7FF] flex-grow">
            <Outlet />
            <WhatsAppButonComponent />
        </main>
        <FooterWithSocialMediaIcons />
        <ScrollRestoration />
    </div>
  )
}