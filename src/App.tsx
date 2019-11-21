import React from "react";
import CartaGira from "./CartaGira";
import ImagenCentral from "./imagenCentral";
import MoveText from "./MoveText";
import Skew from "./SkewText";

const App: React.FC = () => {
  return (
    <div className="section">
      <ImagenCentral />
      <Skew />
      <MoveText />
      <CartaGira />
    </div>
  );
};

export default App;
