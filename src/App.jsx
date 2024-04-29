import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';


const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputValue = (event) => {
    setTodoInput(event.target.value);
  };

  const addTodo = (event) => {    
    setTodos([...todos, todoInput]);
    setTodoInput("");
    event.preventDefault();
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const Ul = styled.ul`
    list-style: none;
  `

  const Li = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
  `

  return (
    <>
   <Container className='d-flex justify-content-center'>
      <form onSubmit={addTodo}>
        <input
          type='text'
          onChange={inputValue}
          value={todoInput}
        />
        <Button variant='primary' type="submit">
          Add
        </Button>

        <Ul className='mt-5'>
        {/* ÖDEVDE İSTENEN!! */}
          {/* {todos.map((todo, index) => (
            <Li key={index} onClick={() => removeTodo(index)}>{todo}</Li>
          ))} */}
          {/* KENDİM BİŞELER KATMAK İSTEDİM */}
          {todos.map((todo, index) => (
            <Li key={index}><span>{todo}</span>
            <Button variant='danger' onClick={() => removeTodo(index)}>kaldır</Button>
            </Li>
          ))}
        </Ul>
      </form>
      </Container>  
    </>
  );
}

export default App;
