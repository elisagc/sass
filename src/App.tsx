import React from "react";
import CartaGira from "./CartaGira";
import Form1 from "./Forms/Form1";
import Todo from "./Forms/Todo";
import ImagenCentral from "./imagenCentral";
import MoveText from "./MoveText";
import Skew from "./SkewText";
import TarjetaIcono from "./TarjetasIcon";

const App: React.FC = () => {
  return (
    <div className="section">
      <ImagenCentral />
      <CartaGira />
      <MoveText />
      <Skew />
      <TarjetaIcono />
      <Form1 />
      <Todo />
    </div>
  );
};

export default App;
