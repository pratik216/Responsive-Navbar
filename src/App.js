import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Demo from './components/pages/Demo';
import Home from './components/pages/Home';
import KeyFeature from './components/pages/KeyFeature';
import Pricing from './components/pages/Pricing';
import Testimonials from './components/pages/Testimonials'

function App() {
  return (
   <div className="container">
     <Router>
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/features" component={KeyFeature}/>
       <Route exact path="/pricing" component={Pricing}/>
       <Route exact path="/testimonials" component={Testimonials}/>
       <Route exact path="/demo" component={Demo}/>

       </Switch>
     </Router>
   </div>
  );
}

export default App;
