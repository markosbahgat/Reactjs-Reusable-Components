import React, {useState, useEffect} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

let Numbpaginate = [];
for (let index = 1; index < 25; index++) Numbpaginate.push(index);

const Pagination = () => {
    useEffect(() => {
        document.querySelector(".first").classList.add("active");
        if(document.querySelector(".first").textContent === '1'){
            document.querySelector(".prev").style.display = "none";
        }
    }, [])

    const [paginate, setPaginate] = useState(Numbpaginate);
    const handleDecreament = (e) => {
        const currentNumber = e.target.parentElement.childNodes[1].textContent;
        document.querySelector(".next").style.display = "block";
        if(currentNumber > '1'){
            setPaginate(paginate => [...paginate.map(item => item - 1)]);
            
        }else if(currentNumber <= paginate.length){
            e.target.style.display = "none";
        }
    }

    const handleIncreament = (e) => {
        const currentNumber = e.target.parentElement.childNodes[9].textContent;
        document.querySelector(".prev").style.display = "block";
        if(currentNumber < paginate.length + 1){
            setPaginate(paginate => [...paginate.map(item => item +1)])
            
        }else if(currentNumber >= paginate.length){
            e.target.style.display = "none";
        }
    }

    return ( 
    <div>
        <div className="pagination">
            <ul>
                <li class="btn prev" onClick={(e) =>  handleDecreament(e)}><i class="fas fa-angle-left"></i> Prev</li>
                {paginate.slice(0, 2).map(item => ( 
                    <li class="numb first" onClick={() => console.log(item)}>{item}</li>
                    ))}
                    <li class="dots"><span>...</span></li>
                {paginate.slice(2, 5).map(item => ( 
                    <li class="numb" onClick={() => console.log(item)}>{item}</li>
                    ))}
                    <li class="dots"><span>...</span></li>
                {paginate.slice(5, 7).map(item => ( 
                    <li class="numb last">{item}</li>
                    ))}
                <li className="btn next" onClick={(e) =>  handleIncreament(e)}>Next <i className="fas fa-angle-right"></i></li>
            </ul>
        </div>
    </div>
     );
}
 
export default Pagination;