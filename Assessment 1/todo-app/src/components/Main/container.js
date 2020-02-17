import React from 'react';
import {MainUI} from './ui';


const ERROR_NOTHING_TYPED = 'Please type some text to add a todo';
const ERROR_TODO_EXISTS = 'Todo already exists';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.refInput = null;
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.setRef = this.setRef.bind(this);
    this.state = {
      todoList: [],
      newTodo: '',
      error: ''
    };
  }

  componentDidMount(){
    this.refInput.focus();
  }

  setRef(ref){
    this.refInput = ref;
  }

  addTodo() {
    // check if we need to display any error
    const {newTodo, todoList} = this.state;
    if(newTodo.length === 0){ // do not allow empty todo
      this.setState({error: ERROR_NOTHING_TYPED});
    } else { // check if todo already exists
      const todoExists = todoList.find(element => element.text === newTodo);
      if(todoExists){
        this.setState({error: ERROR_TODO_EXISTS});
      } else { // alles ok, add it to the list
        const value = {text: newTodo, completed: false}
        this.setState(state => {
          const list = state.todoList.concat(value);
          return {
            todoList: list,
            newTodo: '',
            error: ''
          };
        });
        this.refInput.focus();
      }
    }
  }

  deleteTodo(index){
    this.setState(state => {
      const list = state.todoList;
      list.splice(index, 1);
      return {
        todoList: list
      };
    });
    this.refInput.focus();
  }

  onChange(newTodo){
    this.setState({newTodo});
  }

  onCheck(checked, index){
    const {todoList} = this.state;
    todoList[index].completed = checked;
    this.setState({ todoList });
  }


  render() {
    const {todoList, newTodo, error} = this.state;
    return <MainUI setRef={this.setRef}
                   value={newTodo}
                   addTodo={this.addTodo}
                   deleteTodo={this.deleteTodo}
                   error={error}
                   todoList={todoList}
                   onChange={this.onChange}
                   onCheck={this.onCheck}/>;
  }
}

export const Main = MainContainer;
