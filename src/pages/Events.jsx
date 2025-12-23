import React from "react";
import eventsData from "../data/events.json";
import "./Events.css";

export default function Events() {
  // Tofautisha yajayo na yaliyopita
  const today = new Date();

  const upcomingEvents = eventsData.filter(
    (e) => new Date(e.date) >= today
  );
  const pastEvents = eventsData.filter(
    (e) => new Date(e.date) < today
  );

  return (
    <div className="events-page">

      {/* HEADER */}
      <section className="events-header text-light d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold display-5 text-gold animate-fade">
            Matukio Yetu
          </h1>
          <p className="lead animate-fade-delay">
            Orodha ya matukio yajayo na yaliyopita ya RGC Tanzania.
          </p>
        </div>
      </section>

      <div className="container py-5">

        {/* UPCOMING EVENTS */}
        <h2 className="fw-bold text-gold mb-4">Matukio Yajayo</h2>
        <div className="row g-4">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <div className="col-md-4" key={event.id}>
                <div className="event-card shadow-lg animate-up">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-img"
                  />
                  <div className="p-4">
                    <h4 className="fw-bold text-gold">{event.title}</h4>
                    <p className="text-muted small mt-1">{event.date}</p>
                    <p className="text-muted mt-2 description">
                      {event.description.substring(0, 120)}...
                    </p>
                    <button className="btn btn-gold w-100 mt-3">Soma Zaidi</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">Hakuna matukio yajayo.</p>
          )}
        </div>

        {/* PAST EVENTS */}
        <h2 className="fw-bold text-gold my-5">Matukio Yaliyopita</h2>
        <div className="row g-4">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <div className="col-md-4" key={event.id}>
                <div className="event-card shadow-lg animate-up">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-img"
                  />
                  <div className="p-4">
                    <h4 className="fw-bold text-gold">{event.title}</h4>
                    <p className="text-muted small mt-1">{event.date}</p>
                    <p className="text-muted mt-2 description">
                      {event.description.substring(0, 120)}...
                    </p>
                    <button className="btn btn-gold w-100 mt-3">Soma Zaidi</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">Hakuna matukio yaliyopita.</p>
          )}
        </div>

      </div>
    </div>
  );
}
