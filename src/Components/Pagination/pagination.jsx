import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';


const Pagination = () => {

    const paginate = [];
    for (let index = 1; index < 20; index++) paginate.push(index);
    return ( 
    <div>
        <div className="pagination">
            <ul>
                <li class="btn prev"><span><i class="fas fa-angle-left"></i> Prev</span></li>
                {paginate.slice(0, 2).map(item => ( 
                    <li class="numb active"><span>{item}</span></li>
                    ))}
                    <li class="dots"><span>...</span></li>
                {paginate.slice(2, 5).map(item => ( 
                    <li class="numb"><span>{item}</span></li>
                    ))}
                    <li class="dots"><span>...</span></li>
                {paginate.slice(5, 7).map(item => ( 
                    <li class="numb"><span>{item}</span></li>
                    ))}
                <li className="btn next"><span>Next <i className="fas fa-angle-right"></i></span></li>
            </ul>
        </div>
    </div>
     );
}
 
export default Pagination;