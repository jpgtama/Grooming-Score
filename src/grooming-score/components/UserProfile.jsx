import React from 'react';

class UserProfile extends React.Component{
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

        // check url
        // if empty, use the default one
        if(!this.props.data){
            console.log("no user profile passed, using default image.")
            this.props.data = {
              name: 'Default',
              avatarUrl: 'default.jpg'
            };
        }
        // no state

    }

    render(){
        var baseUrl = '/src/grooming-score/avatars/';
        var u = this.props.data.avatarUrl;

        var s = {
            backgroundImage: "url("+baseUrl+u+")"
        };

        return (
            <span className="avatar" style={s}></span>
        );
    }

}

export default UserProfile;
