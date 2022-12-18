var React = require('react');
var ReactDOM = require('react-dom');

const fName = 'Harry';
const lName = 'Potter';
ReactDOM.render(
<React.Fragment>
  <h1>{fName}'s NETFLIX Series</h1>
  <h2>{`${fName} ${lName}`}</h2>
    <p>List of best series: </p>  
    <ol>
      <li>Mr. Robot</li>
      <li>Goblin</li>
      <li>The House</li>
    </ol>
    </React.Fragment>       ,
  document.getElementById('root')
);

// var h1 = document.createElement('h1');
// h1.innerHTML = 'Get's up now';
// document.getElementById('root').appendChild(h1);