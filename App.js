import React from 'react';
import ReactDOM from 'react-dom/client';


var a = 10
console.log(a)
const heading = React.createElement("h1", {}, "Hello World from React!")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
