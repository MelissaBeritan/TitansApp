import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { PureTitanPage, SearchPage, ShiftingTitanPage, TitanInfo, HomeTitansPage } from "../pages";

export default function TitansRouters() {
    return (
      <>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomeTitansPage/>} />
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/TitansApp/pure" element={<PureTitanPage />} />
            <Route path="/TitansApp/pure/TitanInfo/:id" element={<TitanInfo/>} />
            <Route path="/shifting" element={<ShiftingTitanPage/> } />
        </Routes>
      </>
  )
}
