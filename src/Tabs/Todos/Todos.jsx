import { nanoid } from 'nanoid';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const [filter, setFilter] = useState('');

  const onFormSubmit = text => {
    const isAtList = todos.find(todo => todo.text === text);
    if (isAtList) {
      alert('already in list');
      return;
    }
    const todo = {
      text,
      id: nanoid(),
    };
    setTodos(prevState => [...prevState, todo]);
  };
  const deleteToDo = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };
  const onInputChange = filter => {
    setFilter(filter);
  };
  const filteredToDos = () => {
    return todos.filter(todo => todo.text.includes(filter));
  };
  return (
    <>
      <SearchForm onFormSubmit={onFormSubmit} btnText="Create" />
      <p>Enter your search value</p>
      <Filter onInputChange={onInputChange} />
      <ToDoList data={filteredToDos()} deleteToDo={deleteToDo} />
    </>
  );
};
// export class Todos extends Component {
//   state = {
//     todos: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const todos = localStorage.getItem('todos');

//     if (todos) {
//       const parsedTodos = JSON.parse(todos);
//       this.setState({ todos: parsedTodos });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.todos !== prevState.todos) {
//       localStorage.setItem('todos', JSON.stringify(this.state.todos));
//     }
//   }

//   onFormSubmit = text => {
//     const isAtList = this.state.todos.find(todo => todo.text === text);
//     if (isAtList) {
//       alert('already in list');
//       return;
//     }
//     const todo = {
//       text,
//       id: nanoid(),
//     };
//     this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
//   };
//   deleteToDo = id => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== id),
//     }));
//   };
//   onInputChange = filter => {
//     this.setState({
//       filter,
//     });
//   };
//   filteredToDos = () => {
//     const { todos, filter } = this.state;
//     return todos.filter(todo => todo.text.includes(filter));
//   };
//   render() {
//     const filteredToDos = this.filteredToDos();
//     return (
//       <>
//         <SearchForm onFormSubmit={this.onFormSubmit} btnText="Create" />
//         <p>Enter your search value</p>
//         <Filter onInputChange={this.onInputChange} />
//         <ToDoList data={filteredToDos} deleteToDo={this.deleteToDo} />
//       </>
//     );
//   }
// }
