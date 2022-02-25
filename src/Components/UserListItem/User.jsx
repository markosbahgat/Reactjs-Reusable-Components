import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import userImg from './img1.jpg';

const User = () => {
    return ( 
        <div>
            <div className='main_container'>
                <div className='data_container'>
                    <div className='img_container'><img src={userImg} alt="userImg"/></div>
                    <div className='name_container'>
                        <h1>Markos Baghat</h1>
                        <span>this is markos bahagt</span>
                    </div>
                    <div>
                        <p>First Grade</p>
                    </div>
                    <div>
                        <p>2022</p>
                    </div>
                </div>
                <div className="icons_container">
                    <ul className="icons_list">
                        <li className="icon_item"><i class="fas fa-eye"></i></li>
                        <li className="icon_item"><i class="fas fa-pen"></i></li>
                        <li className="icon_item"><i class="fas fa-trash"></i></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default User;