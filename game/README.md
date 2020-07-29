#John Conway's Game of Life
###Version by Christine Fletcher 7/2020

App deployed: https://conways-game-of-life-christine.netlify.app/

- This application was built using Create React App.
- After cloning to a local directory run `npm install` to download all dependancies used. 
- Dependancies used in this project includes Reactstrap and Bootstrap for styling. 
- Reactstrap docs: https://reactstrap.github.io/
- Bootstrap docs: https://react-bootstrap.github.io/getting-started/introduction/

- Once dependancies installed, run `npm start` in terminal to start the development server. 

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

 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


