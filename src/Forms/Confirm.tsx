import React from "react";

type props = {
  data: string[];
};

const Confirm: React.FC<props> = props => (
  <div className="confirm__box">
    <div className="confirm__box-data">
      <h2>sus datos de reserva son:</h2>
      {props.data.map(e => (
        <div key={e}>{e}</div>
      ))}
    </div>
  </div>
);

export default Confirm;
