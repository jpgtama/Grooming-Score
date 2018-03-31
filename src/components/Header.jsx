import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component{
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
          <header>
            <nav>
              <ul>
                <li><Link replace to='/'>Home</Link></li>
                <li><Link replace to='/taskManager'>TaskManager</Link></li>
              </ul>
            </nav>
          </header>

        );
    }

}

export default Header;
