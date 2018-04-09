import React from 'react';
import Row from './Row.jsx';



class Board extends React.Component{
    componentWillMount() {
      this.setBoardData();
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

        window.board = this;

       // no state
       this.state = {};
       this.peopleMap = {
         '001': {
           id: '001',
           name: 'Mike',
           avatarUrl: '001.jpg',
           score: 3
         },
         '002': {
           id: '002',
           name: 'Susan',
           avatarUrl: '002.jpg',
           score: 3
         },
         '003': {
           id: '003',
           name: 'David',
           avatarUrl: '003.jpg',
           score: 3
         },
         '004': {
           id: '004',
           name: 'Zhao',
           avatarUrl: '004.jpg',
           score: 3
         },
         '005': {
           id: '005',
           name: 'Wang',
           avatarUrl: '005.jpg',
           score: 3
         }
       };
    }

    updateBoardData(){
      // convert people map to score map
      var scorePeopleMap = {};

      for(var key in this.peopleMap){
        var p = this.peopleMap[key]
        if(!scorePeopleMap[p.score]){
          scorePeopleMap[p.score] = [];
        }
        scorePeopleMap[p.score].push(p);
      }

      // covnert to array
      var scoreGroup = [];
      for(var key in scorePeopleMap){

      }

      // sort array
    }

    setBoardData(){
      var rowData1={
        score: 3,
        pl: [{
          id: '001',
          name: 'Mike',
          avatarUrl: '001.jpg'
        },{
          id: '002',
          name: 'Susan',
          avatarUrl: '002.jpg'
        },{
          id: '003',
          name: 'David',
          avatarUrl: '003.jpg'
        }]
      };

      var rowData2={
        score: 5,
        pl: [{
          id: '004',
          name: 'Zhao',
          avatarUrl: '004.jpg'
        },{
          id: '005',
          name: 'Wang',
          avatarUrl: '005.jpg'
        }]
      };

      var boardData = [
        rowData1, rowData2
      ];

      this.setState({
        boardData: boardData
      });
    }


    mike(s){
      var p = {
        id: '001',
        name: 'Mike',
        avatarUrl: '001.jpg',
        score: s?s: 0
      };

      this.updatePeople(p);
    }

    updatePeople(p){

    }


    render(){



      // TODO: sort by score desc.


        return (
          <div>

            <div>Groomming 打分</div>
            <h2>打分榜：</h2>
            <div className="board">
                {this.state.boardData.map((d, i) => <Row key={i}  data={d} />)}

            </div>
          </div>
        );
    }

}

export default Board;
