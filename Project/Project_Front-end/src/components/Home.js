import React from 'react';

import { Navbar, Nav, Form, FormControl, Button, Card, Carousel,Row,Col,Container} from 'react-bootstrap';
// import { Carousel,Container, Row, Col, Card} from 'react-bootstrap';




function Home() {
  return (
   <div className='Top-container'>
<div>
  {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src="fms logo.png" alt style={{width: 80, height: 70}} /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="row">
          <div className="col-md-7">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Brows
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Landings
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav> */}
  <div className="row">
    <img src="/img/pmss.jpeg" style={{width: '200pxl', height: 400}} />
  </div>
  <h1 style={{textAlign:'center', height:'60px', color:'whitesmoke', backgroundColor:'blue'}}>Performance Management System</h1>
  {/* //slider */}
  <div className="container mt-5">
    <h4 style={{display: 'block', marginLeft: '45%', fontSize: '250%', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>Top Performers</h4>
  </div> <br /><br />
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active btn btn-dark" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="container">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-3">
              <div className="card" style={{width: '18rem', alignContent:'center', }}>
                <img src="/img/basit-removebg-preview.png" className="card-img-top" alt="..." style={{height: 230, width: 220, margin:'0 auto'}} />
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center'}}>Top Performer of 2022</h5>
                  <p className="card-text" style={{textAlign:'center'}}>Managed to get the lowest rejection %age</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                      <h4 style={{textAlign:'center'}}>Abdul Basit</h4>
                    </div>
                    <div className="col-md-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{width: '18rem', alignContent:'center'}}>
                <img src="/img/areeb.jpeg" className="card-img-top" alt="..." style={{height: 230, width: 220, margin:'0 auto'}} />
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center'}}>Top Performer of 2021</h5>
                  <p className="card-text" style={{textAlign:'center'}}>Managed to get the higher efficiency</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                      <h4 style={{textAlign:'center'}}>Areeb Kashif</h4>
                    </div>
                    <div className="col-md-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{width: '18rem', alignContent:'center'}}>
                <img src="/img/awais.jpeg" className="card-img-top" alt="..." style={{height: 230, width: 220, margin:'0 auto'}} />
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center'}}>Top Performer of 2020</h5>
                  <p className="card-text" style={{textAlign:'center'}}>Managed to get the higher production for the year 2020</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                      <h4 style={{textAlign:'center'}}>Awais Qarny</h4>
                    </div>
                    <div className="col-md-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{width: '18rem', alignContent:'center'}}>
                <img src="/img/noman.png" className="card-img-top" alt="..." style={{height: 230, width: 220, margin:'0 auto'}} />
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center'}}>Top Performer of 2019</h5>
                  <p className="card-text" style={{textAlign:'center'}}> He has an extranordinary performance in his duties</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                      <h4 style={{textAlign:'center'}}>Noman Saeed</h4>
                    </div>
                    <div className="col-md-2" />
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon btn btn-dark" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon btn btn-dark" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
<br />
<br />
  <div className="row">
    <div>
      <div className="card">
        
        <div className="card-body" style={{backgroundColor: 'black'}}>
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text" style={{marginLeft: 550, fontSize: 30}}> </p>
          <a href="#" className="btn btn-primary">Home</a><br /><br />
          <a href="#" className="btn btn-primary">Dashboard</a><br /><br />
          <a href="#" className="btn btn-primary">Production</a><br /><br />
          <a href="#" className="btn btn-primary">Contact Us</a><br /><br />
          <a href="#" className="btn btn-primary">About Us</a><br /><br />
          <p style={{color: 'bisque', marginLeft: 750}}><strong>All right reserved</strong></p><strong>
          </strong></div><strong>
        </strong></div><strong>
      </strong></div><strong>
    </strong></div><strong>
  </strong></div>
   </div>
  );
}

export default Home;