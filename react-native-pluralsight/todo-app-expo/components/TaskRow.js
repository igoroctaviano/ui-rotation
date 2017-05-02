/* Dependencies */
import ReactNative from 'react-native';
import React from 'react';

const { Text } = ReactNative;
const { Component, PropTypes } = React;

class TaskRow extends Component {
  render() {
    return (
      <Text>{this.props.todo.task}</Text>
    );
  }
}

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired
  }).isRequired
};

export default TaskRow;
