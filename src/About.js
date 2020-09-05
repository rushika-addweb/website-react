import React from 'react';
//import './About.css';
import web from"../src/image/img1.png";
import {Link} from 'react-router-dom';

const About = () =>{

	return(
	  <>
	  <section id ="header" className="d-flex align-items-center">
	  <div className="cotainer-fluid nav_bg">
			   <div className="row">
				   <div className='col-10 mx-auto'>
				   <div className="row">
				   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
					
				   <h1>About Us <strong className="brand-name">Global Solution</strong></h1>
				   <h2 className="my-4">
				   We are team of all business Solution
				   <p>
					   We proovide best solution to grow your business om the top 
					   of the origanization with the strong manpower  and finacial support.
					   We have founded ou bisiness on 2009 .
					   We assure help to you 24*7 service to our client .
				   </p>
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
   
   export default About;
   