import React from 'react';
//import global style
import GlobalStyles from './components/GlobalStyles';
//import pages
import AboutUs from './pages/AboutUs';
import Navigation from './components/Navigation';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//router
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navigation />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/work" element={<OurWork />} />
        </Routes>
    </div>
  );
}

export default App;
