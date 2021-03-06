import React from 'react';
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About"
import Navigation from "./components/Navigation"

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </HashRouter>
  )
}


export default App;
