import React from 'react';
//import logo from './logo.svg';
import web from"../src/image/img1.png";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import  "../node_modules/bootstrap/dist/js/bootstrap.min.bundle";
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import{BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';

function App() {
 return (
    <BrowserRouter>
    <div>
     
     <Navbar/>
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/contact" component={Contact}/>
     <Route path="/service" component={Service}/>
     <Redirect to="/"></Redirect>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () =>{

 return(
   <>
   <section id ="header" className="d-flex align-items-center">
   <div className="cotainer-fluid nav_bg">
            <div className="row">
                <div className='col-10 mx-auto'>
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1> Grow your business with <strong className="brand-name">Global Solution</strong></h1>
                <h2 className="my-4">
                We are team of all business Solution
                </h2>
                <div className="mt-3">
                   <Link to="/service" className="btn btn-primary">Get Started</Link>
                </div>
                </div>
              
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid-animated" alt="home img"/>
                </div>
                </div>
             </div>
            </div>
        </div>
   </section>
   </>

    )
}

export default App;

