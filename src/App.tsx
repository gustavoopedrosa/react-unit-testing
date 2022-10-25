import { useState } from "react";

function App() {
  const [list, setList] = useState(["Gustavo", "Diego", "Mayk"]);

  function addNameToList() {
    setList((state) => [...state, "Novo"]);
  }

  return (
    <>
      <button data-testid="add-button" onClick={addNameToList}>
        Adicionar
      </button>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default App;
