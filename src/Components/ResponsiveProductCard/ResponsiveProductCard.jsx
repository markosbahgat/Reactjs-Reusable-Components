import React, {useState} from 'react';
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
                <i class="fas fa-shopping-bag"></i>
            </div>
            <div className="main_images">
                <img src={product1} alt="blue" className="product_img blue" id='blue'/>
                <img src={product2} alt="red" className="product_img yellow" id='yellow'/>
                <img src={product3} alt="green" className="product_img pink" id='pink'/>
            </div>
        <div class="shoe_details">
                <span class="shoe_name">ADDIDAS GAZE ZX</span>
                <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>
                <div class="stars">
                    <i class='fas fa-star' ></i>
                    <i class='fas fa-star' ></i>
                    <i class='fas fa-star' ></i>
                    <i class='fas fa-star' ></i>
                    <i class='fas fa-star-half' ></i>
                </div>
                </div>
                <div class="color_price">
                <div class="color_option" onClick={(e) => handleSlidePage(e)}>
                    <span class="color">Colour:</span>
                    <div class="circles">
                    <span class="circle blue active"  id="blue"></span>
                    <span class="circle pink " id="pink"></span>
                    <span class="circle yellow " id="yellow"></span>
                    </div>
                </div>
                <div class="price">
                    <span class="price_num">$09.00</span>
                    <span class="price_letter">Nine dollar only</span>
                </div>
                </div>
                <div class="button">
                <div class="button_layer"></div>
                <button>Add To Cart</button>
                </div>
</div>
     );
}
 
export default ProductCard;