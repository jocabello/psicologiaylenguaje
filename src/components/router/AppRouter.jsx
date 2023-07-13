import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import WhoAreWePage from "../pages/WhoAreWePage";
import ServicesPage from "../pages/ServicesPage";
import FaqsPage from "../pages/FaqsPage";
import HomePage from "../pages/home/HomePage";
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
    <RouterProvider router={router} />
  )
}
  