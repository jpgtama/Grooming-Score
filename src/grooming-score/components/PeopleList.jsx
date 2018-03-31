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
        var pl=[{
          name: 'Mike',
          avatarUrl: '001.jpg'
        },{
          name: 'Susan',
          avatarUrl: '002.jpg'
        },{
          name: 'David',
          avatarUrl: '003.jpg'
        }];


        return (
            <div class="peopleList">
                {pl.map((d, i) => <UserProfile key={i}  data={d} />)}
            </div>
        );
    }

}

export default PeopleList;
