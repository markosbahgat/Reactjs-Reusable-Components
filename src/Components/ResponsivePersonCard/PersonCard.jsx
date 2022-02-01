import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import img1 from './img1.jpg'

const PersonCard = () => {
    return (
            <div className="card">
              <div className="card-content">
                <div className="image">
                  <img src={img1} alt=""/>
                </div>
    
                <div className="media-icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-github"></i>
                </div>
    
                <div className="name-profession">
                  <span className="name">Someone Name</span>
                  <span className="profession">Web Developer</span>
                </div>
    
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
    
                <div className="button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe">Hire Me</button>
                </div>
              </div>
            </div>
     );
}
 
export default PersonCard;