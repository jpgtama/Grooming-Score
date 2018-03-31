import React from 'react';
import {Link} from 'react-router-dom';

class NewTask extends React.Component{
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
            <div className="NewTask">
                Hello, NewTask.
            </div>
        );
    }

}

export default NewTask;
