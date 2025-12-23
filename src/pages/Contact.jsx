import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLocationArrow,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* HEADER */}
      <section className="contact-header text-light d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold display-5 text-gold animate-fade">
            Wasiliana Nasi
          </h1>
          <p className="lead animate-fade-delay">
            Tupo tayari kukuombea, kukusikiliza na kukuhudumia.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="container py-5">
        <div className="row g-4">

          {/* MAWASILIANO */}
          <div className="col-md-4">
            <div className="contact-card shadow p-4 text-center animate-up">
              <FaPhoneAlt className="contact-icon" />
              <h5 className="fw-bold mt-3">Piga Simu</h5>
              <p className="mb-1">Askofu Mkuu</p>
              <p className="mb-0">
                <a href="tel:+255655847574">+255 655 847 574</a>
              </p>
              <p>
                <a href="tel:+255716797542">+255 716 797 542</a>
              </p>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className="col-md-4">
            <div className="contact-card shadow p-4 text-center animate-up">
              <FaWhatsapp className="contact-icon whatsapp" />
              <h5 className="fw-bold mt-3">WhatsApp</h5>
              <p className="mb-3">
                Tuma ujumbe moja kwa moja kwa Askofu
              </p>
              <a
                href="https://wa.me/255655847574"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success px-4"
>
                Fungua WhatsApp
              </a>
            </div>
          </div>

          {/* BARUA PEPE */}
          <div className="col-md-4">
            <div className="contact-card shadow p-4 text-center animate-up">
              <FaEnvelope className="contact-icon" />
              <h5 className="fw-bold mt-3">Barua Pepe</h5>
              <p className="mb-0">
                <a href="mailto:info@rgc-tanzania.org">
                  info@rgc-tanzania.org
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="container py-4 text-center animate-fade">
        <h4 className="fw-bold text-gold mb-4">Tufuatilie Mitandaoni</h4>
        <div className="d-flex justify-content-center gap-4 social-links fs-4">
          <a
            href="https://www.facebook.com/rgctoangom?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            title="Facebook"
>
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/rgctoangoma?igsh=Z3FvbXpzbTRuMXZi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            title="Instagram"
>
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@rgctoangoma?_r=1&_t=ZS-922zFfl2zKr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon tiktok"
            title="TikTok"
>
            <FaTiktok />
          </a>
          <a
            href="http://www.youtube.com/@rgctoangoma"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
            title="YouTube"
>
            <FaYoutube />
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section py-5 text-light">
        <div className="container text-center">
          <FaMapMarkerAlt className="location-icon mb-3" />
          <h3 className="fw-bold text-gold">Makao Makuu ya Kanisa</h3>
          <p className="lead mt-3">
            Tanzania – Karibu ujiunge nasi kwa ibada, maombi na fellowship.
          </p>
          <a
            href="https://maps.app.goo.gl/NWPVwYDvuzZdZMHB7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light mt-3"
>
            <FaLocationArrow className="me-2" />
            Fungua Ramani
          </a>
        </div>
      </section>

    </div>
);
}