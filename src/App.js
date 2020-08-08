import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'


import Home from './Components/Home'
import Navigation from './Components/Navigation'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

import logo from './logo.svg';
import './App.scss';



function App() {


  const renderProjects = (routerProps) => {
    return <Projects />
  }

  const renderAbout = (routerProps) => {
    return <About />
  }

  const renderContact = (routerProps) => {
    return <Contact />
  }
  

  return (
    <div className="App">
      <style>@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;350;400;500&display=swap');</style>

      <div className="navigation">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navigation/>
      </div>
      <div className="main">
        <Switch>
                <Route path="/Coral-Fussman-profile/" exact component={Home}/>
                <Route path="/Coral-Fussman-profile/projects" render={renderProjects}/>
                <Route path="/Coral-Fussman-profile/details" render={renderAbout} />
                <Route path="/Coral-Fussman-profile/contact" render={renderContact} />
              </Switch>

      </div>
    </div>
  );
}

let RouterComponent = withRouter(App)
export default RouterComponent


// export default App;
