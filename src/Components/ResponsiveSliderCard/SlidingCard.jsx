import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'

const SlidingCard = () => {
    
    return ( 
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
          <SwiperSlide>
            <div className="swiper-slide card">
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide card">
              <div className="card-content">
                <div className="image">
                  <img src={img2} alt=""/>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide card">
              <div className="card-content">
                <div className="image">
                  <img src={img3} alt=""/>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide card">
              <div className="card-content">
                <div className="image">
                  <img src={img4} alt=""/>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide card">
              <div className="card-content">
                <div className="image">
                  <img src={img5} alt=""/>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide card">
              <div className="card-content">
                <div className="image">
                  <img src={img6} alt=""/>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide card">
              <div className="card-content">
                <div className="image">
                  <img src={img7} alt=""/>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide card">
              <div className="card-content">
                <div className="image">
                  <img src={img8} alt=""/>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <div className="image">
                  <img src={img9} alt=""/>
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
            </SwiperSlide>
          </Swiper>
     );
}
 
export default SlidingCard;