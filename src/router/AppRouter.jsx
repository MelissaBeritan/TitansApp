import { Route, Routes } from "react-router-dom";
import { AtackPage, ColossalPage } from '../titans';
import { LoginPage, HomePage } from '../auth';
import { Navbar } from '../ui';

export default function AppRouter() {
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



