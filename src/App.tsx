import React from "react";

const App: React.FC = () => {
  return (
    <section className="section-tours">
      <div>
        <h2>Most popular tours</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="card">
            <div className="card__side card__side--front">Front</div>
            <div className="card__side card__side--back">Back</div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="card">
            <div className="card__side card__side--front">Front</div>
            <div className="card__side card__side--back">Back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
