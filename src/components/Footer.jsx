import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaLocationArrow,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="church-footer text-light">
      <div className="container py-5">
        <div className="row g-4">

          {/* ABOUT */}
          <div className="col-md-4">
            <h5 className="fw-bold text-gold mb-3">
              Redeemed Gospel Church Tanzania
            </h5>
            <p className="lh-lg text-muted">
              Kanisa linalojenga watu, familia na jamii kwa msingi wa
              Neno la Mungu na nguvu ya Roho Mtakatifu.
            </p>
          </div>

          {/* CONTACT */}
          <div className="col-md-4">
            <h5 className="fw-bold text-gold mb-3">Mawasiliano</h5>

            <p className="mb-2">
              <FaPhoneAlt className="me-2 text-gold" />
              +255 655 847 574
            </p>
            <p className="mb-3">
              <FaPhoneAlt className="me-2 text-gold" />
              +255 716 797 542
            </p>

            <a
              href="https://wa.me/255655847574"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-sm"
            >
              <FaWhatsapp className="me-2" />
              WhatsApp Askofu
            </a>
          </div>

          {/* SOCIALS & LOCATION */}
          <div className="col-md-4">
            <h5 className="fw-bold text-gold mb-3">Tufuatilie Mitandaoni</h5>

            <div className="d-flex gap-3 fs-4 mb-3">
              <a
                href="https://www.facebook.com/rgctoangom?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
                title="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/rgctoangoma?igsh=Z3FvbXpzbTRuMXZi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@rgctoangoma"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tiktok"
                title="TikTok"
              >
                <FaTiktok />
              </a>

              <a
                href="http://www.youtube.com/@rgctoangoma"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link youtube"
                title="YouTube"
              >
                <FaYoutube />
              </a>
            </div>

            <p className="text-muted mb-2">
              <FaMapMarkerAlt className="me-2 text-gold" />
              Makao Makuu – Tanzania
            </p>

            <a
              href="https://maps.app.goo.gl/NWPVwYDvuzZdZMHB7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm"
            >
              <FaLocationArrow className="me-2" />
              Fungua Ramani
            </a>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom text-center py-3">
        <p className="mb-0 small">
          © {new Date().getFullYear()} Redeemed Gospel Church Tanzania.
          Haki zote zimehifadhiwa · Developed by JAYFOUR (+255 683 186 987)
        </p>
      </div>
    </footer>
  );
}
