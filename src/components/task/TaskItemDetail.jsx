import React from 'react';

class TaskItemDetail extends React.Component{
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
            <div>This is TaskItemDetail of Task-{this.props.match.params.id}</div>
        );
    }

}

export default TaskItemDetail;
