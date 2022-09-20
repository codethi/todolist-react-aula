import React from "react";

export default function App() {
  const [tarefas, setTarefas] = React.useState([]);

  function adicionarTarefa() {
    const input = document.querySelector("input");
    const novaTarefa = input.value;
    setTarefas([...tarefas, novaTarefa]);
    input.value = "";
  }

  return (
    <main>
      <input type="text" placeholder="Digite aqui sua tarefa" />
      <button onClick={adicionarTarefa}>Adicionar</button>
      {tarefas.map((tarefa) => (
        <p>{tarefa}</p>
      ))}
    </main>
  );
}
