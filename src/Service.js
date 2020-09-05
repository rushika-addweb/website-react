import React from 'react';
//import './About.css';
import web from"../src/image/img1.png";
import {Link} from 'react-router-dom';

const Service = () =>{

	return(
	  <>
	  <section id ="header" className="d-flex align-items-center">
	  <div className="cotainer-fluid nav_bg">
			   <div className="row">
				   <div className='col-10 mx-auto'>
				   <div className="row">
				   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
					
				   <h1>Servives by <strong className="brand-name">Global Solution</strong></h1>
				   <h2 className="my-4">
				  Servcies Available
				   </h2>
				   <li>Cleaning service</li>
				   <li>Kitchen service</li>
				   <li>Garding service</li>
				   <li>Groscery Service</li>
				   
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
   
   export default Service;
   