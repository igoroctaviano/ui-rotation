/* Dependencies */
import ReactNative from 'react-native';
import React from 'react';

const { ListView, StyleSheet, View } = ReactNative;
const { Component, PropTypes } = React;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  }
});

/* Components */
import TaskRow from './TaskRow.js';

class TaskList extends Component {
  constructor(props, context) {
    super(props, context);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(props.todos)
    };
  }

  renderRow(todo) {
    return (
      <TaskRow todo={todo} />
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView key={this.props.todos}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
