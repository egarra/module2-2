import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Filter } from 'components/Filter/Filter';
export class Todos extends Component {
  state = {
    todos: [],
    filter: '',
  };

  onFormSubmit = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };
  deleteToDo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };
  onInputChange = filter => {
    this.setState({
      filter 
    })
  };
  filteredToDos = () => { 
    const { todos, filter } = this.state;
    return todos.filter(todo => todo.text.includes(filter));
  }
  render() {
    const filteredToDos = this.filteredToDos();
    return (
      <>
        <SearchForm onFormSubmit={this.onFormSubmit} btnText="Create" />
        <p>Enter your search value</p>
        <Filter onInputChange={this.onInputChange } />
        <ToDoList data={filteredToDos} deleteToDo={this.deleteToDo} />
      </>
    );
  }
}
