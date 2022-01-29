import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import logo from './assets/logo.jpg'
import product1 from './assets/blue.png'
import product2 from './assets/yellow.png'
import product3 from './assets/pink.png'
const handleSlidePage = (e) => {
    if(e.target.classList.contains("circle")){
        const circle = document.querySelector('.color_option');
      circle.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      document.querySelector(".main-images .active").classList.remove("active");
      document.querySelector(`.main-images .${e.target.id}`).classList.add("active");
    }
    
}

const ProductCard = () => {
    return ( 
        <div className="product_card">
            <div className="logo_cart">
                <img src={logo} alt="logo" className="cart_img" />
                <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="main_images">
                <img src={product1} alt="blue" className="product_img blue" id='blue'/>
                <img src={product2} alt="red" className="product_img yellow" id='yellow'/>
                <img src={product3} alt="green" className="product_img pink" id='pink'/>
            </div>
        <div className="shoe_details">
                <span className="shoe_name">ADDIDAS GAZE ZX</span>
                <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>
                <div className="stars">
                    <i className='fas fa-star' ></i>
                    <i className='fas fa-star' ></i>
                    <i className='fas fa-star' ></i>
                    <i className='fas fa-star' ></i>
                    <i className='fas fa-star-half' ></i>
                </div>
                </div>
                <div className="color_price">
                <div className="color_option" onClick={(e) => handleSlidePage(e)}>
                    <span className="color">Colour:</span>
                    <div className="circles">
                    <span className="circle blue active"  id="blue"></span>
                    <span className="circle pink " id="pink"></span>
                    <span className="circle yellow " id="yellow"></span>
                    </div>
                </div>
                <div className="price">
                    <span className="price_num">$09.00</span>
                    <span className="price_letter">Nine dollar only</span>
                </div>
                </div>
                <div className="button">
                <div className="button_layer"></div>
                <button>Add To Cart</button>
                </div>
</div>
     );
}
 
export default ProductCard;