// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './MyComponents/Home'
import Contact from './MyComponents/Contact';
import About from './MyComponents/About';
import Navbar from './MyComponents/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import Service from './MyComponents/Service';
import Whyus from './MyComponents/Whyus';
import Footer from './MyComponents/footer'

// import Footer from '../src/MyComponents/footer'
function App() {
  return (
    <>
      <Navbar />
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/whyus" component={Whyus} />

        <Redirect to="/" />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
