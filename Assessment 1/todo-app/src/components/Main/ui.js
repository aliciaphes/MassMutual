import React from 'react';
import PropTypes from 'prop-types';
import { Button, Jumbotron } from 'react-bootstrap';
import { ErrorMessage } from '../ErrorMessage/container';
import { TodoList } from '../TodoList/container';
import './styles.css';



export class MainUI extends React.Component {

  static propTypes = {
      addTodo: PropTypes.func,
      deleteTodo: PropTypes.func,
      onChange: PropTypes.func,
      onCheck: PropTypes.func,
      setRef: PropTypes.func,
      todoList: PropTypes.array,
      value: PropTypes.string,
      error: PropTypes.string
  };



  render() {
    const {addTodo, deleteTodo, todoList, onChange, onCheck, value, error, setRef} = this.props;
    return (
      <div className='container-todo center'>

        <Jumbotron>
          <h1 className='center-text'>TODO App</h1>
          <div className='with-margin-top'>
            This is a simple task-tracking app. Each item can be marked as completed and the corresponding counters will be updated. Every todo can also be deleted.
          </div>
        </Jumbotron>

        <div className='flow-right controls'>
          <span>Item count: <span id='item-count'>{todoList.length}</span></span>
          <span>Unchecked (not completed): <span id='unchecked-count'>{todoList.filter(todo => todo.completed === false).length}</span>
          </span>
        </div>

        <div className='flex'>
          <textarea className='form-control with-margin-top' id='story' value={value} onChange={event => onChange(event.target.value)} ref={input => { setRef(input); }}></textarea>
          <Button variant='primary' id="addButton" className='with-margin-top' onClick={addTodo}>
            Add
          </Button>
        </div>

        {error.length > 0 && <ErrorMessage errorMessage={error}/>}

        <TodoList todoList={todoList} onCheck={onCheck} deleteTodo={deleteTodo} />

      </div>
    );
  }
}
