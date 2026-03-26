import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { AtackPage, ColossalPage, TitansPage } from "../pages";
import { HomePage } from "../../auth";
import SearchBar from "../../ui/components/SearchBar";

export default function TitansRouters() {
    return (
      <>
            <Navbar />
            <Routes>
            <Route path="/" element={<TitansPage/>} />
            <Route path="/search" element={<SearchBar/>}/>
            <Route path="/atack" element={ <AtackPage/> } />
            <Route path="/colossal" element={<ColossalPage/> } />
        </Routes>
      </>
  )
}
