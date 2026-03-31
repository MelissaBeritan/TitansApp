import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { PureTitanPage, SearchPage, ShiftingTitanPage, TitansPage } from "../pages";

export default function TitansRouters() {
    return (
      <>
            <Navbar />
            <Routes>
            <Route path="/" element={<TitansPage/>} />
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/TitansApp/pure" element={ <PureTitanPage/> } />
            <Route path="/shifting" element={<ShiftingTitanPage/> } />
        </Routes>
      </>
  )
}
