import { Outlet } from "react-router-dom"
import NavbarWithCTAButton from "./Navbar"
import FooterWithSocialMediaIcons from "./Footer"


export default function RootLayout() {
  return (
    // <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
    <div className="">
        <NavbarWithCTAButton />
        <main className="">
            <Outlet />
        </main>
        <FooterWithSocialMediaIcons />
    </div>
  )
}