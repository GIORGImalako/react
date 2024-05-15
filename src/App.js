import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Contact } from "./components/contact/Contact";
import { About } from "./components/about/About";
import { NoPage } from "./components/nopage/NoPage";
import { Layout } from "./layout/Layout";
import { Portfolio } from "./components/home/portfolio/Portfolio";
import {Footer} from "./layout/Footer"
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
export default App;
