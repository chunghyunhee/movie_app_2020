import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  // this is declare that I'll use in the future
  state = {
    isLoading : true,
    movies : []
  };

  // do this after rendering 
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false, book : true});
    }, 6000)
  }
  // do rendering area  
  render (){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading":"We are ready"}</div>;
  }
}


export default App;
