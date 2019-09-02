import React from 'react';
import TodoList from './TodoList/todolist';
import TodoItem from './TodoItem/todoitem';
import AddTodo from "./AddTodo/addtodo";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos: []
    };
  }
  
  render() {
    return(
    <div>
  
    {
      <AddTodo></AddTodo>
    }
      </div>
    )
  
  
}

componentDidMount = () => {
  const todos = localStorage.getItem('todos')
  if(todos) {
const savedTodos = JSON.parse(todos);
this.setState({ todos: savedTodos });
  } else {
console.log('no todoes');
  }

}
}

export default App;
