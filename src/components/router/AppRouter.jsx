import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import ContactPage from "../pages/site-contact/ContactPage";
import WhoAreWePage from "../pages/site-whoarewe/WhoAreWePage";
import ServicesPage from "../pages/site-services/ServicesPage";
import FaqsPage from "../pages/site-faqs/FaqsPage";
import HomePage from "../pages/site-home/HomePage";
import RootLayout from "../ui/RootLayout";
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="contacto" element={<ContactPage />} />
      <Route path="quienessomos" element={<WhoAreWePage />} />
      <Route path="servicios" element={<ServicesPage />} />
      <Route path="preguntasyrespuestas" element={<FaqsPage />} />
    </Route>
  )
);

export default function AppRouter() {
  return (
    <RouterProvider router={router} basename={"/psicologiaylenguaje/"} />
  )
}
  