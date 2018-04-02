import React from 'react';
import UserProfile from './UserProfile.jsx';

class PeopleList extends React.Component{
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
        // props should be an list of UserProfile object
        super(props);







    }

    render(){





        return (
                <div className="peopleList">
                    {this.props.data.map((d, i) => <UserProfile key={i}  data={d} />)}
                </div>
        );
    }

}

export default PeopleList;
