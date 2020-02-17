import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import './styles.css';



export class TodoListUI extends React.Component {

  static propTypes = {
      todoList: PropTypes.array,
      deleteTodo: PropTypes.func,
      onCheck: PropTypes.func
  };

  render() {
    const {todoList, onCheck, deleteTodo} = this.props;
    return (
      <div className='with-margin-top with-margin-bottom todo-list-group'>
        {todoList.map((t, index) => (
          <ListGroup.Item key={index}>
            <input type='checkbox' checked={t.completed} className='todo-checkbox' onChange={event => onCheck(event.target.checked, index)} />
            <span className={t.completed ? 'completed' : null}>{t.text}</span>
            <span className='red' onClick={event => deleteTodo(index)}>X</span>
          </ListGroup.Item>
        ))}
      </div>
    );
  }
}
