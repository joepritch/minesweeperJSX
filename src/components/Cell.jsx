import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: 'default'
    };
    this.leftClickCell = this.leftClickCell.bind(this)
    this.rightClickCell = this.rightClickCell.bind(this)
  }

  componentWillMount(){
    console.log(this.props);
    console.log(this.state);
  }

  color(){
    if (this.props.mine === true) {
      return 'red';
    } else {
      return 'darkgrey';
    }
  }

  leftClickCell(){
    console.log('left click ', this.state, this.props);
    this.setState({clicked: 'clicked'})
  }

  rightClickCell(e){
    e.preventDefault();
    console.log('right click ', this.state, this.props);
    this.setState({clicked: 'flagged'})
  }

  render(){
    return(
      <div onClick={this.leftClickCell} onContextMenu={this.rightClickCell} className={this.state.clicked}>
        <style jsx>{`
            div{
              grid-column: ${this.props.xPOS +1};
              grid-row: ${this.props.yPOS +1};
              width:30px;
              height:30px;
              border:outset 5px lightgrey;
              box-sizing:border-box;
              font-size:10px;
            }
            .default{
              background-color:${this.color()};
            }
            .clicked{
              border:inset 5px darkgrey;
              background-color:darkgrey;
            }
            .flagged{
              background: repeating-linear-gradient(
                45deg,
                yellow,
                yellow 5px,
                black 5px,
                black 10px
              );  
            }
            `}</style>
        <p>{this.props.xPOS} {this.props.yPOS}</p>
      </div>
    );
  }
}


export default Cell;
