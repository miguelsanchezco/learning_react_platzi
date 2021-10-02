import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
//import './App.css';
const todos = [
  // array de objetos
  {text : 'Cortar cebolla', completed:false},
  {text : ' pelar pintura' , completed:false},
  {text : ' Hacer interfaz' , completed:false},
  {text : ' lalala' , completed:false},


]

function App(props) {
  return (
    <React.Fragment> 
      <TodoCounter/>
      
      <TodoSearch/>
      
      <TodoList>

        {todos.map( todo => (<TodoItem key={todo.text} text={todo.text} />))}
        
      </TodoList> 
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
