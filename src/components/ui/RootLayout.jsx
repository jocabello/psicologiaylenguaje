import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavbarWithCTAButton from "./Navbar"


export default function RootLayout() {
  return (
    <div>
        <NavbarWithCTAButton />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
