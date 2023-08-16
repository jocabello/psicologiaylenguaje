import { Outlet, ScrollRestoration } from "react-router-dom"
import NavbarWithCTAButton from "./Navbar"
import FooterWithSocialMediaIcons from "./Footer"


export default function RootLayout() {
  return (
    // <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
    <div className="flex flex-col h-screen">
        <NavbarWithCTAButton />
        <main className="bg-[#F8F7FF] flex-grow">
            <Outlet />
        </main>
        <FooterWithSocialMediaIcons />
        <ScrollRestoration />
    </div>
  )
}