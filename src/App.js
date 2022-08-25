import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import BaseColaboradores from "./BaseColaboradores.json";
import FormColaborador from "./components/FormColaborador";
import TablaColaboradores from "./components/TablaColaboradores";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const guardarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const buscarChange = (e) => {
    let data = e.target.value;

    if (data != "") {
      const dataCol = colaboradores.filter(
        (c) => c.nombre.toLowerCase().indexOf(data) !== -1
      );
      setColaboradores(dataCol);
    }
  };

  return (
    <>
      <Buscador buscar={buscarChange} />
      <FormColaborador guardarColaborador={guardarColaborador} />
      <TablaColaboradores colaboradores={colaboradores} />
    </>
  );
}

export default App;
