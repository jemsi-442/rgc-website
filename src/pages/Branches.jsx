import { useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Branches.css";
import { regions} from "../data/regions";

/* ICONS */
const goldIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const hqIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3179/3179068.png",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

/* FitBounds Component */
function FitBounds({ regions}) {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(regions.map((r) => [r.lat, r.lng]));
    map.fitBounds(bounds, { padding: [50, 50]});
}, [regions, map]);
  return null;
}

export default function Branches() {
  const [search, setSearch] = useState("");

  const filteredRegions = regions.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div>
      {/* HEADER */}
      <section className="branches-header text-light d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold display-5 text-gold">
            Uwepo wa Kanisa Tanzania Nzima
          </h1>
          <p className="lead">
            Redeemed Gospel Church ina huduma katika mikoa yote ya Tanzania
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="container py-4">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="🔍 Tafuta mkoa (mf. Dodoma, Mwanza, Zanzibar)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className="text-muted mt-2">
          Jumla ya Mikoa yenye huduma:{" "}
          <strong className="text-gold">{filteredRegions.length}</strong>
        </p>
      </section>

      {/* MAP */}
      <section className="container py-3">
        <div className="map-wrapper shadow-lg">
          <MapContainer
            scrollWheelZoom={false}
            className="tanzania-map"
            center={[-6.369, 34.8888]}
            zoom={6}
>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <FitBounds regions={filteredRegions} />
            {filteredRegions.map((region) => (
              <Marker
                key={region.name}
                position={[region.lat, region.lng]}
                icon={region.isHQ? hqIcon: goldIcon}
>
                <Popup>
                  <strong>{region.name}</strong>
                  {region.isHQ? (
                    <div className="fw-bold text-gold">
                      Makao Makuu – Toangoma, Temeke
                    </div>
): (
                    <div>RGC ipo katika mkoa huu</div>
)}
                </Popup>
              </Marker>
))}
          </MapContainer>
        </div>
      </section>

      {/* REGION CARDS */}
      <section className="container py-5">
        <div className="row g-4">
          {filteredRegions.map((r) => (
            <div className="col-md-3 col-sm-6" key={r.name}>
              <div className={`branch-card shadow ${r.isHQ? "hq": ""}`}>
                <h5 className="fw-bold text-gold">{r.name}</h5>
                {r.isHQ? (
                  <span className="badge bg-warning text-dark">
                    Makao Makuu
                  </span>
): (
                  <p className="small text-muted mt-2">
                    Huduma ya RGC ipo katika mkoa huu
                  </p>
)}
              </div>
            </div>
))}
        </div>
      </section>
    </div>
);
}

