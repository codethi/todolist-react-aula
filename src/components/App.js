import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Reset } from "../Reset";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");

  function addNewTask() {
    const newTask = { id: tasks.length + 1, title: textInput, done: false };
    setTasks([...tasks, newTask]); // agendamento!
    setTextInput("");
  }

  function deleteTask(idTask) {
    const newArrayTasks = tasks.filter((task) => task.id !== idTask);
    setTasks(newArrayTasks);
  }

  function markTaskAsDone(idTask) {
    tasks.forEach((task) =>
      task.id === idTask ? (task.done = !task.done) : ""
    );
    setTasks([...tasks]);
  }

  /* function markTaskAsDone(idTask) {
    tasks.forEach((task) => {
      if (task.id === idTask) {
        task.done ? (task.done = false) : (task.done = true);
      }
    });
    setTasks([...tasks]);
  } */

  return (
    <>
      <Reset />
      <section className="input-container">
        <input
          type="text"
          placeholder="Digite aqui sua tarefa"
          onChange={(event) => setTextInput(event.target.value)}
          value={textInput}
        />
        <button onClick={addNewTask}>Adicionar</button>
      </section>

      <ul className="tarefas-container">
        {tasks.map((task, index) => (
          <ItemList done={task.done} key={index}>
            <span
              onClick={() => markTaskAsDone(task.id)}
              /* className={task.done ? "done" : ""} */
            >
              <ion-icon
                name={task.done ? "checkmark-circle" : "ellipse-outline"}
              ></ion-icon>{" "}
              {task.title}
            </span>
            <ion-icon
              onClick={() => deleteTask(task.id)}
              name="close-circle-outline"
            ></ion-icon>
          </ItemList>
        ))}
      </ul>
    </>
  );
}

const ItemList = styled.li`
  padding: 1rem;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* even pega as posições da lista pares e odd pega as impares */
  &:nth-child(even) {
    background: #0095ff1d;
    border-radius: 0.5rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.1rem;
    color: ${(banana) => (banana.done ? "#9e9e9e" : "#004d83")};
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};

    /* Exemplo do Felipe Bueno */
    /* animation: ${(props) => (props.done ? "slidein 5s infinite" : "")}; */
  }

  ion-icon {
    cursor: pointer;
    color: #0095ff;
    width: 30px;
    height: 30px;
  }

  .done {
    text-decoration: line-through;
    color: #9e9e9e;
  }

  ion-icon[name="close-circle-outline"] {
    cursor: pointer;
    color: #ff5959;
    width: 30px;
    height: 30px;

    &:hover {
      transform: scale(1.1);
    }
  }

  /* Exemplo do Felipe Bueno */
  /* @keyframes slidein {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(100%);
    }
  } */
`;
