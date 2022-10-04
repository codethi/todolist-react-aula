import { useState } from "react";
import { Reset } from "../Reset";
import ItemUl from "./ItemUl";
import InputContainer from "./InputContainer";
import styled from "styled-components";

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
      <InputContainer
        setTextInput={setTextInput}
        textInput={textInput}
        addNewTask={addNewTask}
      />

      <UlTasks>
        {tasks.map((task, index) => (
          <ItemUl
            key={index}
            task={task}
            deleteTask={deleteTask}
            markTaskAsDone={markTaskAsDone}
          >
            <ion-icon
              onClick={() => deleteTask(task.id)}
              name="close-circle-outline"
            ></ion-icon>
          </ItemUl>
        ))}
      </UlTasks>
    </>
  );
}

const UlTasks = styled.ul`
  margin: 0 5rem;
`;
