import React from 'react';

const regions = [
  {
    title: "Île-de-France",
    lines: ["12 Rue de Rivoli", "75001 Paris, France"]
  },
  {
    title: "Provence-Alpes-Côte d'Azur",
    lines: ["45 Avenue Jean Médecin", "06000 Nice, France"]
  },
  {
    title: "Nouvelle-Aquitaine",
    lines: ["88 Cours Victor Hugo", "33000 Bordeaux, France"]
  },
  {
    title: "Auvergne-Rhône-Alpes",
    lines: ["22 Rue de la République", "69002 Lyon, France"]
  },
  {
    title: "Occitanie",
    lines: ["10 Rue Alsace Lorraine", "31000 Toulouse, France"]
  },
  {
    title: "Hauts-de-France",
    lines: ["19 Place Rihour", "59800 Lille, France"]
  }
];

export default function LocationSection3(){
  return (
    <section className="location-section3 py-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2 className="loc3-title">Find Platieu Across France</h2>
            <p className="loc3-sub">Enjoy Platieu's taste at our locations nationwide. A memorable dining experience is always nearby.</p>
          </div>

          <div className="col-lg-4">
            {regions.slice(0,3).map((r) => (
              <div className="loc3-item" key={r.title}>
                <div className="loc3-icon" aria-hidden="true">📍</div>
                <div className="loc3-info">
                  <h4 className="loc3-region">{r.title}</h4>
                  {r.lines.map((l,i)=> <p className="loc3-lines" key={i}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            {regions.slice(3).map((r) => (
              <div className="loc3-item" key={r.title}>
                <div className="loc3-icon" aria-hidden="true">📍</div>
                <div className="loc3-info">
                  <h4 className="loc3-region">{r.title}</h4>
                  {r.lines.map((l,i)=> <p className="loc3-lines" key={i}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
