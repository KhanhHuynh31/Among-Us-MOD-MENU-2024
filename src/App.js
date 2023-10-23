import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";

import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import MangaPage from "./pages/Home/MangaPage/MangaPage";
import ReadingPage from "./pages/Home/ReadingPage/ReadingPage";

import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manga" element={<MangaPage />} />
          <Route path="/manga/chapter" element={<ReadingPage />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
