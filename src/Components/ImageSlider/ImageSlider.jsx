import React, { useState, useEffect } from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';


const ImageSlider = () => {
    let counter = 0;
    const [i, setI] =useState(0);
    const images =[0, img1, img2, img3, img4];
    const Slider = () => {
        if(counter > images.length - 2){
            setI(0);
            counter = 0;
        }
        counter++;
        setI(i => i + 1)
        setTimeout(() => Slider(), 3000)
    };
    useEffect(() => {
        Slider();
    }, []);
    return ( 
        <div className="banner">
            <div className="slider">
                <img src={images[i]} alt="backgroundImage" id='slideImg'/>
            </div>
            <div className="overlay">
                <div className="navbar">
                    
                </div>
                <div className="content">
                </div>
            </div>
        </div>
     );
}
 
export default ImageSlider;