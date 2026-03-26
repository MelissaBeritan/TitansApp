import { Route, Routes } from "react-router-dom";
import { LoginPage } from '../auth';
import TitansRouters from "../titans/routes/TitansRouters";

export function AppRouter() {
  return (
    <>
        <Routes>
          <Route path="/*" element={<TitansRouters/>} />
          <Route path="/login" element={ <LoginPage/> } />
        </Routes>
    </>
  )
}

