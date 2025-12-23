import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const slides = [
  {
    id: 1,
    title: "Redeemed Gospel Church Tanzania",
    subtitle: "Kanisa linaloleta mabadiliko ya kweli kupitia Neno la Mungu",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1500&q=60",
  },
  {
    id: 2,
    title: "Mahali pa Ibada na Ukombozi",
    subtitle: "Karibu ujionee upendo wa Kristo",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1500&q=60",
  },
  {
    id: 3,
    title: "Tunajenga Vizazi",
    subtitle: "Vijana, familia na jamii inayomcha Mungu",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1500&q=60",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">

      {/* HERO / SLIDER */}
      <section className="hero-section">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="hero-content text-center text-light">
              <h1 className="fw-bold display-4 animate-fade">
                {slide.title}
              </h1>
              <p className="lead mt-3 animate-fade-delay">
                {slide.subtitle}
              </p>

              <div className="mt-4">
                <Link to="/about" className="btn btn-gold me-3">
                  Kuhusu Kanisa
                </Link>
                <Link to="/contact" className="btn btn-outline-light">
                  Wasiliana Nasi
                </Link>
              </div>
            </div>
          </div>
        ))}


        {/* SLIDER DOTS */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="info-card shadow animate-up">
              <h3 className="fw-bold text-gold">Dhamira Yetu</h3>
              <p className="mt-3 text-muted lh-lg">
                Kueneza injili ya Yesu Kristo, kujenga waamini imara,
                na kuleta mabadiliko ya kiroho, kijamii na kimaadili
                katika jamii.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-card shadow animate-up">
              <h3 className="fw-bold text-gold">Maono Yetu</h3>
              <p className="mt-3 text-muted lh-lg">
                Kuona taifa na ulimwengu ukibadilishwa kwa nguvu ya Neno la Mungu,
                familia zikisimama katika msingi wa Kristo,
                na kizazi kipya kinachomtumikia Mungu kwa uaminifu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="quick-section py-5">
        <div className="container">
          <div className="row g-4 text-center">

            <div className="col-md-4">
              <div className="quick-card animate-up">
                <h4 className="fw-bold text-gold">Matukio</h4>
                <p className="text-light">
                  Angalia matukio yajayo na yaliyopita ya kanisa letu.
                </p>
                <Link to="/events" className="btn btn-sm btn-outline-gold">
                  Tazama
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="quick-card animate-up">
                <h4 className="fw-bold text-gold">Huduma</h4>
                <p className="text-light">
                  Jifunze kuhusu departments na huduma za kanisa.
                </p>
                <Link to="/ministries" className="btn btn-sm btn-outline-gold">
                  Angalia
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="quick-card animate-up">
                <h4 className="fw-bold text-gold">Matawi</h4>
                <p className="text-light">
                  Pata tawi lililo karibu nawe Tanzania nzima.
                </p>
                <Link to="/branches" className="btn btn-sm btn-outline-gold">
                  Tafuta
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
