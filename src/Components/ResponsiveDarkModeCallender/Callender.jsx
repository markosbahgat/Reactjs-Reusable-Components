import React, {useState} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';


const ResponsiveCallender = () => {

const currentDate = new Date();
const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const [year, setYear] = useState(currentDate.getFullYear());
const [month, setMonth] = useState(currentDate.getMonth());
const first_day = new Date(month, year, 1);
const [showedMonth, setShowedMonth] = useState(month_names[month]);

//------------------------------------------------------------------------------------------------------

const isLeapYear = () => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}
const getFebDays = () => {
    return isLeapYear(year) ? 29 : 28
}

//------------------------------------------------------------------------------------------------------

const days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Numbers = days_of_month[month] + first_day.getDay() - 1;
const MonthDays = Array.from({length: Numbers + 2}, (v, i) => i);


//------------------------------------------------------------------------------------------------------



const NextYear = () => {
    setYear(prevyear => prevyear + 1)
    
}
const PrevYear = () => {
    setYear(prevyear => prevyear - 1)
}
const dark_mode_toggle = () => {
    document.querySelector('.calendar').classList.toggle('light')
    document.querySelector('.calendar').classList.toggle('dark')
}
const handleMonth = (e) => {
    document.querySelector(".month-list").classList.toggle("show");
    setMonth(Number(e.target.dataset.month));
    setShowedMonth(month_names[e.target.dataset.month]);
}

//------------------------------------------------------------------------------------------------------
return (
    <div className="calendar light" >
            <div className="calendar-header" >
                <span className="month-picker" id="month-picker" onClick={() => document.querySelector(".month-list").classList.toggle("show")}>{showedMonth}</span>
                <div className="year-picker" >
                    <span className="year-change" id="prev-year" onClick={PrevYear}>
                        <pre><i className="fas fa-chevron-left"></i></pre>
                    </span>
                    <span id="year">{year}</span>
                    <span className="year-change" id="next-year" onClick={NextYear}>
                        <pre><i className="fas fa-chevron-right"></i></pre>
                    </span>
                </div>
            </div>
            <div className="calendar-body">
                <div className="calendar-week-day" >
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="calendar-days">
                    {MonthDays.map((index) => {
                       if(index - first_day.getDay() === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()){
                           return(
                            <div className='calendar-day-hover curr-date' key={index}>
                                {index > first_day.getDay() && index - first_day.getDay()}
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                           )
                       }
                       else{
                           return (
                                <div className={`calendar-day-hover`} key={index}>
                                    {index > first_day.getDay()  && index - first_day.getDay()}
                                    {index > first_day.getDay() && 
                                    <><span></span><span></span><span></span><span></span></>}
                                </div>
                            )
                        }
                    }
                    )}
                </div>
            </div>
            <div className="calendar-footer">
                <div className="toggle">
                    <span>Dark Mode</span>
                    <div className="dark-mode-switch" onClick={dark_mode_toggle}>
                        <div className="dark-mode-switch-ident"></div>
                    </div>
                </div>
            </div>
            <div className="month-list">
                {month_names.map((month, index) => (
                    <div data-month={`${index}`} key={index} onClick={(e) => handleMonth(e)}>{month}</div>
                    ))}
            </div>
        </div>
     );
}
 
export default ResponsiveCallender;