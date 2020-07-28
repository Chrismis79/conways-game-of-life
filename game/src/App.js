import React from 'react';
import Grid from './components/Grid'
import Buttons from './components/Buttons'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    //set default size of grid and speed
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      isPlaying: true,
      //create initial state array
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }
  //Click on a box to make it 'alive' or 'dead'
  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull)
    if (!this.state.isPlaying) {
      gridCopy[row][col] = !gridCopy[row][col]
      this.setState({
        gridFull: gridCopy
      })
    }

  }

  //Randomally seed the graph with 'live' cells
  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  }

  playButton = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed);
    this.setState({
      isPlaying: true
    })
  }

  pauseButton = () => {
    clearInterval(this.intervalId);
    this.setState({
      isPlaying: false
    })
  }

  fast = () => {
    this.speed = 100;
    this.playButton();
    this.setState({
      isPlaying: false
    })
  }

  slow = () => {
    this.speed = 1000;
    this.playButton();
    this.setState({
      isPlaying: false
    })
  }

  clear = () => {
    let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
    this.setState({
      gridFull: grid,
      generation: 0,
      isPlaying: false
    })
  }
  //Change size of grid
  gridSize = (size) => {
    switch (size) {
      case "1":
        this.cols = 20;
        this.rows = 10;
        break;
      case "2":
        this.cols = 50;
        this.rows = 30;
        break;
      default:
        this.cols = 70;
        this.rows = 50;

    }
    this.clear();
  }

  play = () => {

    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;

        // Check each neighboring cell and increment the count by 1 if it has active neighbors
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][[j + 1]]) count++;
        //Decide if cell will live of die based on how many neighbors it has
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;

      }
    }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1,
      isPlaying: true
    });
  }
  componentDidMount() {
    this.seed();
    this.playButton();
  }

  render() {
    return (
      <div>
        <h1 className='center'>John Conway's Game of Life</h1>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2 className="center">Generations: {this.state.generation}</h2>
        <ul className='center'>
          <h3>Game Play</h3>
          <li>This is a 0 player game.</li>
          <li>Start by clicking 'seed', then play and watch what happens. Notice any patterns?</li>
          <li>You can clear the grid and make your own shapes by clicking on the grid boxes to make them come alive.</li>
          <li>You can change the speed to 'fast' or 'slow.'</li>
          <li>Each cell follows a specific set of rules:
          <ul>
              <li>Any cell with fewer then 2 live neighbors dies, as if by underpopulation</li>
              <li>Any cell with 2 or 3 neighbors lives onto the next generation.</li>
              <li>Any cell with more than 3 live neighbors dies, as if by overpopulation</li>
              <li>Any dead cell with exactly 3 live neighbors becomes alive in the next generation.</li>
            </ul></li>
        </ul>
      </div>
    )
  }
}
function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr))
}


export default App;
