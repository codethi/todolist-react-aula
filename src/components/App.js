import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addNewTask() {
    const input = document.querySelector("input");
    const newTask = { id: tasks.length + 1, title: input.value, done: false };
    setTasks([...tasks, newTask]);
    input.value = "";
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
    <main>
      <section className="input-container">
        <input type="text" placeholder="Digite aqui sua tarefa" />
        <button onClick={addNewTask}>Adicionar</button>
      </section>

      <ul className="tarefas-container">
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              onClick={() => markTaskAsDone(task.id)}
              className={task.done ? "done" : ""}
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
          </li>
        ))}
      </ul>
    </main>
  );
}
