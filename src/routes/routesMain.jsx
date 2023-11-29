import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import LoadingPage from "../pages/ContactPage";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<LoadingPage />} />
         <Route path="/home" element={<HomePage />} />
         <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
   );
};