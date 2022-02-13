import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const SpeedDial = () => {
    return ( 
        <div>
            <div class="speed-dial">
                <a class="toggle bg-share"><i class="fas fa-external-link-alt"></i></a>
                <ul class="dials">
                    <li><a class="bg-twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a class="bg-facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a class="bg-google-plus" href="#"><i class="fab fa-google-plus-g"></i></a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default SpeedDial;