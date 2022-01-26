import React, {useState} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
const CustomSelectBox = () => {
    const [selected, setSelected] = useState("Selected Item");
    console.log(selected);
    return (
        <>
            <h1>Select Dropdown Box</h1>
            <div className="dropdown" tabIndex="1">
                <div className="dropdown_select" tabIndex="1">
                    <span className="select">{selected}</span>
                    <i className="fa fa-caret-down icon"></i>
                </div>
            <div className="dropdown_list">
                <div className="dropdown_list_item" onClick={(e) => setSelected(e.target.textContent)}>item one</div>
                <div className="dropdown_list_item" onClick={(e) => setSelected(e.target.textContent)}>item two</div>
                <div className="dropdown_list_item" onClick={(e) => setSelected(e.target.textContent)}>item three</div>
                <div className="dropdown_list_item" onClick={(e) => setSelected(e.target.textContent)}>item four</div>
                <div className="dropdown_list_item" onClick={(e) => setSelected(e.target.textContent)}>item five</div>
            </div>
        </div>
    </>
     );
}
 
export default CustomSelectBox;