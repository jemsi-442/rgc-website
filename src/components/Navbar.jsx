import { NavLink } from "react-router-dom";
import { FaChurch, FaBars } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top church-navbar shadow">
      <div className="container">

        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={closeMenu}>
          <FaChurch className="logo-icon" />
          <span className="fw-bold">Redeemed Gospel Church</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-lg-3">

            {[
              { to: "/", label: "Mwanzo", end: true },
              { to: "/kuhusu", label: "Kuhusu Sisi" },
              { to: "/uongozi", label: "Uongozi" },
              { to: "/huduma", label: "Huduma" },
              { to: "/matawi", label: "Matawi" },
              { to: "/matukio", label: "Matukio" },
              { to: "/habari", label: "Habari" },
              { to: "/gallery", label: "Gallery" },
              { to: "/mawasiliano", label: "Mawasiliano" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
}
