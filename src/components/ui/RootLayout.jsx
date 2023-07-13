import { Outlet } from "react-router-dom"
import NavbarWithCTAButton from "./Navbar"
import FooterWithSocialMediaIcons from "./Footer"


export default function RootLayout() {
  return (
    <div>
        <NavbarWithCTAButton />
        <main className="">
            <Outlet />
        </main>
        <FooterWithSocialMediaIcons />
    </div>
  )
}
