import { Route, Routes } from "react-router-dom";
import MarvelPage from "./heroes/pages/MarvelPage";
import DcPage from "./heroes/pages/DcPage";
import LoginPage from "./auth/pages/LoginPage";
import HomePage from "./auth/pages/HomePage";
import { Navbar } from "./router/AppRouter";

export default function HeroesApp() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/marvel" element={<MarvelPage/> } />
            <Route path="/dc" element={ <DcPage/> } />
            <Route path="/login" element={ <LoginPage/> } />
        </Routes>
        </>
  )
}
