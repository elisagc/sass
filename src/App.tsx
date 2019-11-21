import React from "react";
import CartaGira from "./CartaGira";
import ImagenCentral from "./imagenCentral";
import MoveText from "./MoveText";

const App: React.FC = () => {
  return (
    <div className="section">
      <ImagenCentral />
      <MoveText />
      <CartaGira />
    </div>
  );
};

export default App;
