import React from 'react';
import PropTypes from 'prop-types';
import {TodoListUI} from './ui';


class TodoListContainer extends React.Component {

  static propTypes = {
      todoList: PropTypes.array,
      deleteTodo: PropTypes.func,
      onCheck: PropTypes.func
  };

  render() {
    const {todoList, onCheck, deleteTodo} = this.props;
    return <TodoListUI todoList={todoList} onCheck={onCheck} deleteTodo={deleteTodo}/>;
  }
}

export const TodoList = TodoListContainer;
