import React from 'react';
import Square from './square';


export default class Board extends React.Component {

  handleClick(i){
    const squares = this.state.squares.slice()
    if(calculateWinner(squares) || squares[i]){
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        cls ={this.state.xIsNext ? 'redX' : 'blueO'}// this is for colors of x and o, dont know how to handle this
      />)
  }

  render() {
    return (
      <div>
        <h1 className='title'>TIC TAC TOE</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

