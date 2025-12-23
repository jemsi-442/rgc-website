import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Events from "./pages/Events";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Ministries from "./pages/Ministries";
import Gallery from "./pages/Gallery";
import Leadership from "./pages/Leadership";

import "./styles.css";

export default function App() {
  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kuhusu" element={<About />} />
          <Route path="/uongozi" element={<Leadership />} />
          <Route path="/huduma" element={<Ministries />} />
          <Route path="/matawi" element={<Branches />} />
          <Route path="/matukio" element={<Events />} />
          <Route path="/habari" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mawasiliano" element={<Contact />} />

          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
