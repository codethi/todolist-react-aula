import styled from "styled-components";

export default function InputContainer({ setTextInput, textInput, addNewTask }) {
  return (
    <InputContainerLayout>
      <input
        type="text"
        placeholder="Digite aqui sua tarefa"
        onChange={(event) => setTextInput(event.target.value)}
        value={textInput}
      />
      <button onClick={addNewTask}>Adicionar</button>
    </InputContainerLayout>
  );
}

const InputContainerLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem;
  margin: 5rem 5rem 0 5rem;
  background-color: #0095ff;
  border-radius: 0.5rem;

  input {
    padding: 1rem;
    border: 0;
    outline: none;
    border-radius: 0.3rem 0rem 0rem 0.3rem;
    width: 500px;
    font-size: 1rem;
  }

  button {
    padding: 1rem;
    border: 0;
    outline: none;
    border-radius: 0rem 0.3rem 0.3rem 0rem;
    background-color: #008900;
    color: #ffffff;
    font-weight: 700;
    font-size: 1rem;
  }
`;
