import { Outlet, ScrollRestoration } from "react-router-dom"
import FooterWithSocialMediaIcons from "./Footer"
import NavBar from "./NavBar"
import WhatsAppButonComponent from "./WhatsAppButonComponent"


export default function RootLayout() {
  return (
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