import React, {useState} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const MultiSelectBox = () => {
    const [selected, setSelected] = useState(["Selected Item"]);
    const handleClick = (e) => {
        selected.map(item => {
            if(e.target.firstChild.name === item){
                return console.log("fuck");
            }else{
                return setSelected([...selected, e.target.firstChild.name])
                
            }
            
        })
        console.log(e.target.firstChild.name);
        if(e.target.firstChild.checked === true){
            e.target.firstChild.checked = false;
            
        }else{
            e.target.firstChild.checked = true;
            
        }
    }
    return (
        <>
            <h1>Multi Select Dropdown CheckBox</h1>
            <div className="dropdown" tabIndex="1">
                <div className="dropdown_select" tabIndex="1">
                    <span className="select">{selected.slice(0, 3).join(", ")}</span>
                    <i className="fa fa-caret-down icon"></i>
                </div>
            <div className="dropdown_list">
                <div className="dropdown_list_item" onClick={(e) => handleClick(e)}>
                    <input type="checkbox" id='itemOne' value="itemOne" name="item One"/>
                    <label htmlFor='itemOne'>item one</label>
                </div>
                <div className="dropdown_list_item" onClick={(e) => handleClick(e)}>
                    <input type="checkbox" id='itemOne' value="itemOne" name="item Two"/>
                    <label>item two</label>
                </div>
                <div className="dropdown_list_item" onClick={(e) => handleClick(e)}>
                    <input type="checkbox" id='itemOne' value="itemOne" name="item Three"/>
                    <label>item three</label>
                </div>
                <div className="dropdown_list_item" onClick={(e) => handleClick(e)}>
                    <input type="checkbox" id='itemOne' value="itemOne" name="item Four"/>
                    <label>item four</label>
                </div>
            </div>
        </div>
    </>
     );
}
 
export default MultiSelectBox;