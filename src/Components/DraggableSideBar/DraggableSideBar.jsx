import React, {useState} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';


const handleShowSidebar = () =>{
    document.querySelector(".sidebar").classList.toggle("active");
}
const DraggableSideBar = () => {
    return ( 
        <div>
            <div className="sidebar">
                <div className="logo_content">
                    <div className="logo">
                        <i className='bx bx1-c-plus-plus'></i>
                        <div className="logo_name">By: "Markos Bahgat"</div>
                    </div>
                    <i className="fas fa-bars" id='btn' onClick={handleShowSidebar}></i>
                </div>
                <ul className="nav_list">
                    <li>
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder='Search....'/>
                    </li>
                    <li>
                        <a href="#">
                            <i className='fas fa-user-alt' ></i>
                            <span className="links_name">User</span>
                        </a>
                        <span className="tooltip">User</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-comments"></i>
                            <span className="links_name">Messages</span>
                        </a>
                        <span className="tooltip">Messages</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-chart-pie"></i>
                            <span className="links_name">Analytics</span>
                        </a>
                        <span className="tooltip">Analytics</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-folder"></i>
                            <span className="links_name">File Manager</span>
                        </a>
                        <span className="tooltip">Files</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="links_name">Orders</span>
                        </a>
                        <span className="tooltip">Orders</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-bookmark"></i>
                            <span className="links_name">Saved</span>
                        </a>
                        <span className="tooltip">Saved</span>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <img src='profile.png' alt=''/>
                            <div className="name_job">
                                <div className="name">Markos Bahgat</div>
                                <div className="job">Web Designer</div>
                            </div>
                        </div>
                        <i className="fas fa-sign-out-alt" id='log_out'></i>
                    </div>
                </div>
            </div>
            <div className="home_content">
                <div className="text">
                    Home Content
                </div>
            </div>
        </div>
     );
}
 
export default DraggableSideBar;