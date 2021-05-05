import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    isLoaded: true,
    movies : []
  }

  componentDidMount() {
    setTimeout(()=>{this.setState({isLoaded: false})}, 6000)
  }


  render() {
    const {isLoaded} = this.state
    return (
    <div>
      {isLoaded ? "Loading..." : "We are ready!" }
    </div>
    )
  }
}

export default App;
