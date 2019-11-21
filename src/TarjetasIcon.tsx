import React from "react";
import { GiMiteAlt } from "react-icons/gi";

const TarjetaIcono: React.FC = () => {
  return (
    <div className="row-tarjetas">
      <div className="col-1-of-3">
        <div className="tarjeta">
          <GiMiteAlt className="icono" />
          <h3>Que pasaaa</h3>
          <p>holaaaaaaaa</p>
        </div>
      </div>

      <div className="col-1-of-3">
        <div className="tarjeta">
          <GiMiteAlt className="icono" />
          <h3>Que pasaaa</h3>
          <p>holaaaaaaaa</p>
        </div>
      </div>

      <div className="col-1-of-3">
        <div className="tarjeta">
          <GiMiteAlt className="icono" />
          <h3>Que pasaaa</h3>
          <p>holaaaaaaaa</p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaIcono;
