import React, {useState, useEffect} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';


const MultiStepForm = () => {
    let progressText = document.querySelectorAll(".step p");
    let bullet = document.querySelectorAll(".step .bullet");
    let progressCheck = document.querySelectorAll(".step .check");
    let slidePage = document.querySelector(".page");
    useEffect(() => {
         progressText = document.querySelectorAll(".step p");
         progressCheck = document.querySelectorAll(".step .check");
         bullet = document.querySelectorAll(".step .bullet");
         slidePage = document.querySelector(".page");

    }, [document])
    const [current, setCurrent] = useState(1);
    
const handleNextBtnFirst = (event) => {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    setCurrent(current => current + 1);

}
const handleNextBtnSec = (event) => {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    setCurrent(current => current + 1);

}
const handleNextBtnThird = (event) => {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  setCurrent(current => current + 1);

}
const handleSubmitBtn = (event) => {
    event.preventDefault();
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    setCurrent(current => current + 1);
    setTimeout(function(){
        alert("Your Form Successfully Signed up");
        window.location.reload();
    },800);
    
}
const handlePrevBtnSec = (event) => {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  setCurrent(current => current - 1);

}
const handlePrevBtnThird = (event) => {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  setCurrent(current => current - 1);

}
const handlePrevBtnFourth = (event) => {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  setCurrent(current => current - 1);

}
    return ( 
        <div>
            <div className="container">
         <header>Signup Form</header>
         <div className="progress-bar">
            <div className="step">
               <p>
                  Name
               </p>
               <div className="bullet">
                  <span>1</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>
            <div className="step">
               <p>
                  Contact
               </p>
               <div className="bullet">
                  <span>2</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>
            <div className="step">
               <p>
                  Birth
               </p>
               <div className="bullet">
                  <span>3</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>
            <div className="step">
               <p>
                  Submit
               </p>
               <div className="bullet">
                  <span>4</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>
         </div>
         <div className="form-outer">
            <form action="#">
               <div className="page">
                  <div className="title">
                     Basic Info:
                  </div>
                  <div className="field">
                     <div className="label">
                        First Name
                     </div>
                     <input type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">
                        Last Name
                     </div>
                     <input type="text"/>
                  </div>
                  <div className="field">
                     <button className="firstNext next" onClick={(event) => handleNextBtnFirst(event)}>Next</button>
                  </div>
               </div>
               <div className="page">
                  <div className="title">
                     Contact Info:
                  </div>
                  <div className="field">
                     <div className="label">
                        Email Address
                     </div>
                     <input type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">
                        Phone Number
                     </div>
                     <input type="Number"/>
                  </div>
                  <div className="field btns">
                     <button className="prev-1 prev" onClick={(event) => handlePrevBtnSec(event)}>Previous</button>
                     <button className="next-1 next" onClick={(event) => handleNextBtnSec(event)}>Next</button>
                  </div>
               </div>
               <div className="page">
                  <div className="title">
                     Date of Birth:
                  </div>
                  <div className="field">
                     <div className="label">
                        Date
                     </div>
                     <input type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">
                        Gender
                     </div>
                     <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                     </select>
                  </div>
                  <div className="field btns">
                     <button className="prev-2 prev" onClick={(event) => handlePrevBtnThird(event)}>Previous</button>
                     <button className="next-2 next" onClick={(event) => handleNextBtnThird(event)}>Next</button>
                  </div>
               </div>
               <div className="page">
                  <div className="title">
                     Login Details:
                  </div>
                  <div className="field">
                     <div className="label">
                        Username
                     </div>
                     <input type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">
                        Password
                     </div>
                     <input type="password"/>
                  </div>
                  <div className="field btns">
                     <button className="prev-3 prev" onClick={(event) => handlePrevBtnFourth(event)}>Previous</button>
                     <button className="submit" onClick={(event) => handleSubmitBtn(event)}>Submit</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
        </div>
     );
}
 
export default MultiStepForm;