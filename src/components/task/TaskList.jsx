import React from 'react';
import databus from '../../services/databus.js'

import TaskItem from './TaskItem.jsx'

class TaskList extends React.Component {

  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillReceiveProps(newProps) {
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
  }
  componentDidUpdate(prevProps, prevState) {
  }
  componentWillUnmount() {
  }


  constructor(props) {
    super(props);

    this.state = {
       data: databus.getTaskList()
    }
  }

   render() {
      return (
         <div className="tasklist">
            <ul>
              {this.state.data.map(
                  (d, i) =>  <TaskItem key={i} task={d}/>
              )}
            </ul>
         </div>
      );
   }
}
export default TaskList;
