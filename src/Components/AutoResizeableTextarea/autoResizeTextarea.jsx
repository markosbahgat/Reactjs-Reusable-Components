import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const AutoResizeTextArea = () => {;
    const HandleTextare = (e) => {
      e.target.style.height = "63px";
      let scHeight = e.target.scrollHeight;
      e.target.style.height = `${scHeight}px`;
    };
    return ( 
        <div class="wrapper">
            <textarea spellcheck="false" placeholder="Type something here..." required onKeyUp={(e) => HandleTextare(e)}></textarea>
        </div>
     );
}
 
export default AutoResizeTextArea;