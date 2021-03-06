# Top Coins

Simple analysis of crypto assets React App.

![Peek 2021-12-05 16-40](https://user-images.githubusercontent.com/7655624/144744204-1bfb7986-c199-4fd1-a369-06610b3fc2b2.gif)

## Install Dependencies

1. Install Node
   
   Follow node installation guide [here](https://nodejs.org/en/download/).

## Project Installation

1. Clone the project using HTTPS: `https://github.com/sneharamnath/top-coins.git` 
   or SSH `git@github.com:sneharamnath/top-coins.git`
2. `cd top-coins` - Switch to project directory in the directory cloned.
3. `npm install` - Install the dependencies required in the app.
4. `npm start` - Runs the app in the development mode.
    
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 
    The page will reload if you make edits. You will also see any lint errors in the console
    
## App Solution

This app allows the users to view the analysis of top coins. The app allows the user to do the following:

  1. View the data of top 'n' coins in a tabular format.
  2. View the data of top 'n' coins in form of a graph (Scatter graph).
 
      The scatter chart shows the follwoing data: 
      
      * __*X axis*__ - is Market Capitalization
      * __*Y axis*__ -  is Volume (24h)
      * __*Z axis*__ -  (or size of the point) is absolute price change (24h)
  3. Allows the user to set a limit on the data they want to view. This is a global setting and the changes will be reflected in table data and graph data.  

## Technology and Tools

  * `Library` - React
  * `CSS Framework` - <https://purecss.io/>
  * `Charting Library` - <https://recharts.org/>
  * `HTTP Client`- Axios
  * `API` - [coinmarketcap.com](https://coinmarketcap.com/api/)
  * `API endpoint`: `/cryptocurrency/listings/latest`

## Future project scope

1. Package the app using Docker.
2. Use Styled components.
3. Implementing a caching strategy.
4. Live update of data every 'n' seconds.



