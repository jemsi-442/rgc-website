import React from "react";
import newsData from "../data/events.json";
import "./News.css";

export default function News() {
  return (
    <div className="news-page">

      {/* HEADER */}
      <section className="news-header text-light d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold display-5 text-gold animate-fade">
            Habari & Matukio
          </h1>
          <p className="lead animate-fade-delay">
            Sasisho la taarifa, matukio, na habari za huduma ya RGC Tanzania.
          </p>
        </div>
      </section>

      {/* LIST YA HABARI */}
      <div className="container py-5">
        <div className="row g-4">
          {newsData.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="news-card shadow-lg animate-up">
                
                {/* PICHA */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-img"
                />

                {/* MAELEZO YA HABARI */}
                <div className="p-4">
                  <h4 className="fw-bold text-gold">{item.title}</h4>
                  <p className="text-muted small mt-1">
                    <i className="bi bi-calendar3"></i> {item.date}
                  </p>

                  <p className="text-muted mt-2 description">
                    {item.description.substring(0, 120)}...
                  </p>

                  <button className="btn btn-gold w-100 mt-3">
                    Soma Zaidi
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
