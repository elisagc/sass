import React from "react";

const CartaGira: React.FC = () => {
  return (
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
  );
};

export default CartaGira;
