import React from "react";

type props = {
  data: string[];
};

const Confirm: React.FC<props> = props => (
  <div className="confirm__box">
    {props.data.map(e => (
      <div key={e} className="confirm__box-data">
        {e}
      </div>
    ))}
  </div>
);

export default Confirm;
