# conways-game-of-life
Computer Science build week project using React 

###Version by Christine Fletcher 7/2020

App deployed: https://conways-game-of-life-christine.netlify.app/

- This application was built using Create React App.
- After cloning to a local directory run `npm install` to download all dependancies used. 
- Dependancies used in this project include Reactstrap and Bootstrap for styling. 
- Reactstrap docs: https://reactstrap.github.io/
- Bootstrap docs: https://react-bootstrap.github.io/getting-started/introduction/

- Once dependancies are installed, run `npm start` in terminal to start the development server. 

## About John Conway's Game of Life
The Game of Life is a 0 player game. Meaning you start it and there is no interaction on the part of the player. It is based off a simple mathmatical algorithm to decide if a cell is to be born, lives, or dies in the next generation.

#Rules:
 - Each cell can have up to 8 neighbors, 4 sides + 4 diagonals.
 - Any cell with fewer than 2 live neighbors dies, as if by underpopulation.
 - Any cell with 2 or 3 neighbors lives onto the next generation.
 - Any cell with more than 3 live neighbors dies, as if by over population. 
 - Any dead cell with exactly 3 neighbors is born to become alive in the next generation. 

 - The algorithm to produce this logic loops through 2 arrays, rows and columns. It checks each cell on the grid and increments the count of neighbors for each cell. Following the rules above to decide if the cell remains dead, is born, stays alive, or dies. 

 - This project was built using functional and class components. I do plan to refactor into functional components, using useState hook for state management. 

 - The background photo is by Andrew Ridley on https://unsplash.com/

