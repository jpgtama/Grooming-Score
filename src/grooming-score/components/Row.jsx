import React from 'react';
import PeopleList from './PeopleList.jsx';



class Row extends React.Component{
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
        // props should be a UserProfile object
        super(props);


        // no state

    }

    render(){
        var numberClassMap = {
          1: 'one',
          2: 'two',
          3: 'three',
          5: 'five',
          8: 'eight',
          13: 'thirteen'
        };


        return (
          <div className="row">
            <span className={"score "+ numberClassMap[this.props.data.score]}>{this.props.data.score}</span>
            <PeopleList data={this.props.data.pl}/>
          </div>
        );
    }

}

export default Row;
