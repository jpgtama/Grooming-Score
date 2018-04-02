import React from 'react';
import Row from './Row.jsx';



class Board extends React.Component{
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

      var rowData1={
        score: 3,
        pl: [{
          name: 'Mike',
          avatarUrl: '001.jpg'
        },{
          name: 'Susan',
          avatarUrl: '002.jpg'
        },{
          name: 'David',
          avatarUrl: '003.jpg'
        }]
      };

      var rowData2={
        score: 5,
        pl: [{
          name: 'Zhao',
          avatarUrl: '004.jpg'
        },{
          name: 'Wang',
          avatarUrl: '005.jpg'
        }]
      };

      var boardData = [
        rowData1, rowData2
      ];

      // TODO: sort by score desc.


        return (
          <div>

            <div>Groomming 打分</div>
            <h2>打分榜：</h2>
            <div className="board">
                {boardData.map((d, i) => <Row key={i}  data={d} />)}

            </div>
          </div>
        );
    }

}

export default Board;
