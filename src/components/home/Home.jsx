import React from 'react';
import TaskList from '../task/TaskList.jsx'

class Home extends React.Component{
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
        super(props);

        // state

    }

    render(){
        return (
            <div>你今天的作业有这些：
              <TaskList/>
            </div>
        );
    }

}

export default Home;
