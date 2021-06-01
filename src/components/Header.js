import React from "react";
import "../index.css";

const getWeek = () => {
    alert('week')
    return ('week')
}
const getMonth = () => {
    alert('month')
}


export const Header = () => {
    return (
        <div className="header">
            <h1>Итоги</h1>
            <div className="header_profile">
                <div className="header_nav">
                    <div onClick={getWeek} className="header_nav-item active-period" id="results_week">Неделя</div>
                    <div onClick={getMonth} className="header_nav-item" id="results_month">Месяц</div>
                </div>
                <div className="header-icons">
                    <img className="icon_search" src="icons/search.svg" alt="search"/>
                    <img className="icon_push" src="icons/push.svg" alt="push"/>
                </div>
                <div className="profile">
                    <span>Ксюша Донская</span>
                    <img src="../img/profile.png" alt="profile"/>
                </div>
            </div>
        </div>

      
    )    
}

// {
//     const resultsWeekBtn = document.getElementById('results_week')
//     const resultsMonthBtn = document.getElementById('results_month')

//     resultsWeekBtn.addEventListener('click', () => {
//         resultsMonthBtn.classList.toggle('active-period')
//         resultsWeekBtn.classList.toggle('active-period')
//     })
//     resultsMonthBtn.addEventListener('click', () => {
//         resultsMonthBtn.classList.toggle('active-period')
//         resultsWeekBtn.classList.toggle('active-period')
//     })
// } 
