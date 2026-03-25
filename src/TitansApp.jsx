import { Route, Routes } from "react-router-dom";
import AtackPage from "./titans/pages/AtackPage";
import ColossalPage from "./titans/pages/ColossalPage";
import LoginPage from "./auth/pages/LoginPage";
import HomePage from "./auth/pages/HomePage";
import { Navbar } from "./router/AppRouter";

export default function TitansApp() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/atack" element={ <AtackPage/> } />
            <Route path="/colossal" element={<ColossalPage/> } />
            <Route path="/login" element={ <LoginPage/> } />
        </Routes>
        </>
  )
}
