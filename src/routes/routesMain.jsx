import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import RegistrationPage from "../pages/RegistrationPage";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/Registration" element={<RegistrationPage />} />
      </Routes>
   );
};