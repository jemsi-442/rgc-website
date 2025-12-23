import "./Leadership.css";
import askofu from "../assets/leadership/askofu.jpg";

export default function Leadership() {
  const leaders = [
    {
      id: 1,
      name: "Askofu Mkuu",
      title: "Mwanzilishi & Kiongozi wa Kitaifa",
      image: askofu,
      message:
        "Kuongoza kanisa katika msingi wa Neno la Mungu, maombi, na upendo wa Kristo."
    },
    {
      id: 2,
      name: "Mchungaji Mkuu",
      title: "Msimamizi wa Huduma",
      image: askofu,
      message:
        "Kusimamia huduma za kanisa na kuhakikisha ukuaji wa kiroho wa waumini."
    },
    {
      id: 3,
      name: "Mratibu wa Huduma",
      title: "Uongozi wa Departments",
      image: askofu,
      message:
        "Kuratibu departments zote ili zitimize maono ya kanisa."
    }
  ];

  return (
    <div className="leadership-page">

      {/* HEADER */}
      <section className="leadership-header text-light d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold display-5 text-gold animate-fade">
            Uongozi wa Kanisa
          </h1>
          <p className="lead animate-fade-delay">
            Viongozi waliowekwa na Mungu kuliongoza kanisa lake.
          </p>
        </div>
      </section>

      {/* ASKOFU FEATURED */}
      <section className="container py-5">
        <div className="row align-items-center g-5">

          <div className="col-md-4 text-center">
            <img
              src={askofu}
              alt="Askofu Mkuu"
              className="img-fluid featured-bishop shadow-lg"
            />
          </div>

          <div className="col-md-8">
            <h2 className="fw-bold text-gold mb-3">
              Askofu Mkuu
            </h2>
            <p className="lead lh-lg text-muted">
              Askofu Mkuu wa Redeemed Gospel Church Tanzania ni mtumishi
              aliyeitwa na Mungu kwa ajili ya kuhubiri injili, kujenga
              kanisa, na kuongoza taifa katika maombi na haki.
            </p>

            <p className="lh-lg text-muted">
              Kupitia maono aliyopokea kutoka kwa Mungu, kanisa limeendelea
              kukua kiroho, kijamii, na kitaifa, likiwa nuru kwa vizazi.
            </p>
          </div>

        </div>
      </section>

      {/* OTHER LEADERS */}
      <section className="leaders-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5">
            Viongozi Wengine
          </h2>

          <div className="row g-4">
            {leaders.map((l) => (
              <div className="col-md-4" key={l.id}>
                <div className="leader-card shadow-lg animate-up">
                  <img
                    src={l.image}
                    alt={l.name}
                    className="img-fluid leader-img"
                  />
                  <div className="p-4">
                    <h5 className="fw-bold text-gold">{l.name}</h5>
                    <p className="text-warning mb-2">{l.title}</p>
                    <p className="text-muted small">
                      {l.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
