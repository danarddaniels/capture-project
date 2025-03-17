import React from 'react';
//import global style
import GlobalStyles from './components/GlobalStyles';
//import pages
import AboutUs from './pages/AboutUs';
import Navigation from './components/Navigation';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navigation />
      {/* <Route path = "/"></Route> */}
      <AboutUs />
    </div>
  );
}

export default App;
