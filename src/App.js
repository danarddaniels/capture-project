import React from 'react';
//import global style
import GlobalStyles from './components/GlobalStyles';
//import pages
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AboutUs />
    </div>
  );
}

export default App;
