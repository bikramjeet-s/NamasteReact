import React from 'react';
import ReactDOM from 'react-dom/client';


// React Element
const elem = <span>React Element</span> 
const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById('root')); // 

// root.render(heading); 


// React Element
const jsxHeading = (<h1 id="heading"> 
Hello from JSX 
</h1>);
root.render(jsxHeading);

// React Component
// React Functional Component 
const HeadingComponent = () => {
    return <h1>Hello this is a React Functional Component</h1>
};

const HeadingComponent2 = () => <h1>React Functional Component</h1>;
// HeadingComponent and HeadingComponent2 do one and the same thing. 

const Title = function (){
    return (<h1>
        {elem}
        Namaste React using JSX
    </h1>)
};


const Head = () => (
    <div id="container" >

        <Title />
        <h2>{100+200}</h2>
        {console.log(100+200)}
        {2342104820948203}
        {heading} 
        <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
);
//Component Composition
// This is how we put in React Element in component
// crossside scripting
root.render(<Head />);


