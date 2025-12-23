import "./About.css";
import askofu from "../assets/leadership/askofu.jpg";

export default function About() {
  return (
    <div className="about-page">

      {/* HEADER */}
      <section className="about-header text-light d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold display-5 text-gold animate-fade">
            Kuhusu Kanisa
          </h1>
          <p className="lead animate-fade-delay">
            Historia ya Redeemed Gospel Church Tanzania na maono tuliyopewa na Mungu.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4 section-title-gold text-center">
          Historia Yetu
        </h2>

        <p className="lead lh-lg text-muted animate-up">
          Redeemed Gospel Church Tanzania ni huduma ya Kikristo iliyoanzishwa
          kwa lengo la kueneza injili ya Yesu Kristo kwa upendo na nguvu ya Roho Mtakatifu.
        </p>
      </section>

      {/* UJUMBE WA ASKOFU */}
      <section className="bishop-section py-5 text-light">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-md-4 text-center">
              <img
                src={askofu}
                className="img-fluid bishop-img shadow-lg"
                alt="Askofu Mkuu"
              />
            </div>

            <div className="col-md-8">
              <h2 className="fw-bold text-gold mb-3">
                Ujumbe Kutoka kwa Askofu
              </h2>
              <p className="lh-lg">
                “Tunamshukuru Mungu kwa safari ya huduma hii. Karibu ujiunge nasi
                katika safari ya imani na matumaini.”
              </p>

              <h5 className="fw-bold mt-4 text-warning">
                — Askofu Mkuu
              </h5>
            </div>

          </div>
        </div>
      </section>

      {/* MITANDAO YA KIJAMII */}
      <section className="social-media-section py-5 bg-light text-center">
        <div className="container">
          <h3 className="fw-bold mb-4">Tufuatilie Mitandaoni</h3>
          <div className="d-flex justify-content-center gap-4 fs-3">
            <a href="https://www.facebook.com/rgctoangom?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-primary">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/rgctoangoma?igsh=Z3FvbXpzbTRuMXZi" target="_blank" rel="noopener noreferrer" className="text-danger">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@rgctoangoma?_r=1&_t=ZS-922zFfl2zKr" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="http://www.youtube.com/@rgctoangoma" target="_blank" rel="noopener noreferrer" className="text-danger">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://maps.app.goo.gl/NWPVwYDvuzZdZMHB7" target="_blank" rel="noopener noreferrer" className="text-success">
              <i className="fas fa-map-marker-alt"></i>
            </a>
          </div>
        </div>
      </section>

    </div>
);
}