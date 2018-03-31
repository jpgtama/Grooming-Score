import React from 'react';
import {Link} from 'react-router-dom';

class TaskItem extends React.Component{
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


    constructor(props){
        // props should be a task object
        super(props);

        // no state

    }

    render(){
        return (
            <li className="taskItem">
                <Link replace to={'/taskItemDetail/'+this.props.task.id}>{ this.props.task.id + ' - ' +   this.props.task.name}</Link>
            </li>
        );
    }

}

export default TaskItem;
