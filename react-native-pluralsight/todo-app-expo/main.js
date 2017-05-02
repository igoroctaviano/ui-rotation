/* Dependencies */
import Expo from 'expo';
import React from 'react';

const { Component } = React;

/* Components */
import TaskList from './components/TaskList.js';

class ExpoTodo extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: [
        { task: 'Learn React Native' },
        { task: 'Learn React Native 2' }
      ]
    }
  }

  render() {
    return (
      <TaskList todos={this.state.todos} />
    );
  }
}

Expo.registerRootComponent(ExpoTodo);
