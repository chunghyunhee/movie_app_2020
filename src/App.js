import React from 'react';

function Food(props){
  return <h1>I like {props.fav}</h1>;
}

function App() {
  return (
    <div> 
      <hl>Hello</hl>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
    );
}

export default App;
