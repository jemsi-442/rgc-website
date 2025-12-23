import { useState, useEffect, useMemo } from "react";
import "./Gallery.css";

/* =========================
   IMAGES (LOCAL)
========================= */
import ibada from "../assets/gallery/ibada.jpeg";
import vijana from "../assets/gallery/vijana.jpeg";
import mkesha from "../assets/gallery/mkesha.jpeg";
import mahubiri from "../assets/gallery/mahubiri.jpeg";
import waumini from "../assets/gallery/waumini.jpeg";
import watumishi from "../assets/gallery/watumishi.jpeg";
import neno from "../assets/gallery/neno.jpeg";
import watu from "../assets/gallery/watu.jpeg";
import ibadani from "../assets/gallery/ibadani.jpeg";

/* =========================
   DATA
========================= */
const IMAGES = [
  { id: 1, title: "Ibada ya Jumapili", src: ibada, category: "Ibada" },
  { id: 2, title: "Vijana Kanisani", src: vijana, category: "Vijana" },
  { id: 3, title: "Mkesha wa Maombi", src: mkesha, category: "Huduma" },
  { id: 4, title: "Mahubiri ya Neno", src: mahubiri, category: "Huduma" },
  { id: 5, title: "Waumini Wakiabudu", src: waumini, category: "Ibada" },
  { id: 6, title: "Watumishi wa Kanisa", src: watumishi, category: "Huduma" },
  { id: 7, title: "Neno la Mungu", src: neno, category: "Huduma" },
  { id: 8, title: "Watu Wakiwa kwenye Uwepo", src: watu, category: "Ibada" },
  { id: 9, title: "Ibadani ya Pamoja", src: ibadani, category: "Ibada" },
];

const CATEGORIES = ["Zote", "Ibada", "Vijana", "Huduma"];

/* =========================
   COMPONENT
========================= */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Zote");
  const [searchTerm, setSearchTerm] = useState("");

  /* =========================
     FILTER LOGIC (OPTIMIZED)
  ========================= */
  const filteredImages = useMemo(() => {
    return IMAGES.filter((img) => {
      const matchesCategory =
        activeCategory === "Zote" || img.category === activeCategory;

      const matchesSearch = img.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  /* =========================
     SLIDESHOW AUTOPLAY
  ========================= */
  useEffect(() => {
    if (!selectedImage || filteredImages.length === 0) return;

    const interval = setInterval(() => {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage.id
      );

      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedImage, filteredImages]);

  /* =========================
     CLOSE ON ESC
  ========================= */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="gallery-page">
      {/* HEADER */}
      <section className="gallery-header text-light d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold display-5 text-gold animate-fade">
            Gallery ya Matukio
          </h1>
          <p className="lead animate-fade-delay">
            Picha za ibada, huduma na matukio mbalimbali ya kanisa
          </p>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="container py-4 text-center">
        <input
          type="text"
          className="form-control mb-3 w-50 mx-auto"
          placeholder="Tafuta picha kwa jina..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="btn-group flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-warning m-1 ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="container py-4">
        {filteredImages.length === 0 ? (
          <p className="text-center text-muted">
            Hakuna picha zilizopatikana 😕
          </p>
        ) : (
          <div className="row g-4">
            {filteredImages.map((img) => (
              <div key={img.id} className="col-md-4 col-sm-6">
                <div
                  className="gallery-card shadow animate-up"
                  onClick={() => setSelectedImage(img)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Fungua picha: ${img.title}`}
                  style={{ cursor: "zoom-in" }}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedImage(img)
                  }
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <h5>{img.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
          style={{ cursor: "zoom-out" }}
        >
          <div
            className="lightbox-content animate-zoom"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
              aria-label="Funga"
              onClick={() => setSelectedImage(null)}
            />

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="img-fluid"
            />

            <p className="mt-3 text-light text-center">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
