import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';


const BoxModel = () => { 

      const hireBtn = () => {
    const  section = document.querySelector("section")
        section.classList.add("show");
      };

      const CloseBtn = (cBtn) => {
        const  section = document.querySelector("section"),
        textArea = section.querySelector("textarea");
        section.classList.remove("show");
        textArea.value = "";
    };
    const sendBtn = () => {
          const  section = document.querySelector("section"),
          textAreaValue = section.querySelector("textarea").value;
        section.classList.remove("show");
        console.log(textAreaValue);
      }
    return ( 
        <section>
        <div className="profile">
            <div className="profile-img">
                <img src="profile.jpg" alt=""/>
            </div>
            <span className="name">Prem Shahi</span>
            <span className="profession">Web & Web Designer</span>
            <div id="hireBtn" className="button" onClick={hireBtn}>
                <i className="bx bxs-envelope"></i>
                <button>Hire me</button>
            </div>
        </div>

        <div className="popup-outer">
            <div className="popup-box">
                <i id="close" className="bx bx-x close"></i>
                <div className="profile-text">
                    <img src="profile.jpg" alt=""/> 
                    <div className="text">
                        <span className="name">Prem Shahi</span>
                         <span className="profession">Web & Web Designer</span>
                    </div>
                </div>
                <form action="#">
                    <textarea spellCheck="true" placeholder="Enter your message"></textarea>
                    <div className="button">
                        <button id="close" className="cancel" onClick={CloseBtn}>Cancel</button>
                        <button className="send" onClick={sendBtn}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
     );
}
 
export default BoxModel;