import React from 'react';
import databus from '../../services/databus.js'
import { Switch, Route } from 'react-router-dom';
import NewTask from './NewTask.jsx'
import TaskItem from './TaskItem.jsx'

class TaskManager extends React.Component {

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
         <div className="taskManager">
            <button>View Task List</button>
            <button>New Task</button>

            <Switch>
              <Route exact path='/taskManager/taskList' render="I am in progress."/>
              <Route exact path='/taskManager/newTask' component={NewTask}/>
            </Switch>


         </div>
      );
   }
}
export default TaskManager;
