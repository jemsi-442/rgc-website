import "./Ministries.css";

import mediaImg from "../assets/ministries/media.jpeg";
import choirImg from "../assets/ministries/choir.jpeg";
import worshipImg from "../assets/ministries/worship.jpeg";

export default function Ministries() {
  const ministries = [
    {
      id: 1,
      name: "Media & Technical",
      desc: "Huduma ya sauti, video, live stream na mitandao ya kijamii.",
      image: mediaImg,
    },
    {
      id: 2,
      name: "Praise & Worship",
      desc: "Kusifu na kuabudu kwa sauti na ala za muziki.",
      image: worshipImg,
    },
    {
      id: 3,
      name: "Kwaya",
      desc: "Huduma ya uimbaji na kuhubiri kupitia nyimbo.",
      image: choirImg,
    },
  ];

  return (
    <div className="ministries-page container py-5">
      <h1 className="text-center fw-bold text-gold mb-5">
        Huduma za Kanisa
      </h1>

      <div className="row g-4">
        {ministries.map((m) => (
          <div className="col-md-4" key={m.id}>
            <div className="ministry-card shadow-lg">
              <img
                src={m.image}
                alt={m.name}
                className="img-fluid rounded mb-3"
              />
              <h4 className="fw-bold text-gold">{m.name}</h4>
              <p className="text-muted">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
