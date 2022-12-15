import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ToDoList } from 'components/ToDoList/ToDoList';

export class Todos extends Component {
  state = {
    todos: [],
  };

  onFormSubmit = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  render() {
    return (
      <>
        <SearchForm onFormSubmit={this.onFormSubmit} btnText="Create" />
        <ToDoList data={this.state.todos} />
      </>
    );
  }
}
