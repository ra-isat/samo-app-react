import React from "react";
import "../index.css";
import  '../data'
import axios from 'axios'
// import {useRef, useState} from 'react'

export const MonthResult = () => {
  return (
    <>
      <PlanMontn />
      <TargetNextMonth />
      <DiaryMonth />
      <TargetMonth />
      <PlanNextMonth />
      <Analytics />
    </>
  );
};

// let PlanMontn
// const result = []

// function getResults() {
//   const API_URL = 'http://localhost:8000';
//   const url = `${API_URL}/api/v1/results/`;

//   return axios({
//       method: 'get',
//       url: url,
//       // data: params,
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI0ODg2MzkwLCJqdGkiOiI3ZTIxZGZmY2YzOGU0YmJlYjNmOWM4NGUxYzYxNWQ2ZCIsInVzZXJfaWQiOjF9._I8CimQyZ2vjcIWwpPfsAZdPfm36_slqDy9fDJ3Cbic'
//       },
//   }).then(response => response.data);

// }

// getResults().then(function (res) {
//   result.push(res)
// });

// function waitForDOM() { 
//   if (result.length) {
//       let json = result[0]

//       const planMontnItem = json.month_plan.map((item, i) => {
//         const handleRemoveItem = (event) => {
//           json.month_plan.splice(i, 1);
//         };
      
//         return (
//           <label key={item.id} className={item.category + " " + "checkbox"}>
//             <input type="checkbox" />
//             <span> {item.data} </span>
//             <i id={i} onClick={handleRemoveItem}> x </i>
//           </label>
//         );
//       });
      
//       PlanMontn = () => {
//         return (
//           <div className="block plan-month_block">
//             <div className="headline_block">
//               <h2> План месяца </h2>
//               <img src="./icons/pencil.svg" alt="edit" className="edit" />
//             </div>
//             <div className="progress-block">
//               3 / {json.month_plan.length}
//               <div className="progress-bar">
//                 <span style={{ width: "50%" }}> </span>
//               </div>
//             </div>
//             {/* <EditField /> */}
//             <div className="plan-month_checkbox" id="month_plan">
//               {planMontnItem}
//             </div>
//           </div>
//         );
//       };

//   }
//   else {
//     setTimeout(waitForDOM, 300);
//   }
// }
// waitForDOM()



const json = {
  monthPlan: [
    { id: 1, status: 0, data: "Сделать 100 продаж", category: "business" },
    {
      id: 2,
      status: 1,
      data: "Залить разработку по Терре на тестовый сервер",
      category: "business",
    },
    {
      id: 3,
      status: 0,
      data: "Найти мобильного разработчика в проект",
      category: "business",
    },
    {
      id: 4,
      status: 0,
      data: "Вложиться в догикоины",
      category: "investments",
    },
    { id: 5, status: 0, data: "Дочитать книгу", category: "growth" },
    { id: 6, status: 0, data: "Начать бегать по утрам", category: "health" },
  ],
  monthTarget: [
    { id: 1, status: 0, data: "Внедрить медитации", category: "brightness" },
    { id: 2, status: 1, data: "Решить семейное", category: "family" },
    {
      id: 3,
      status: 0,
      data: "Показать ребятам первую MVP SAMO",
      category: "business",
    },
  ],
  nextMonthTarget: [
    { id: 1, data: "Подписать договор с инвесторами", category: "business" },
    { id: 2, data: "всякие цели", category: "brightness" },
    { id: 3, data: "просыпаться раньше", category: "growth" },
  ],
  nextMonthPlan: [
    { id: 1, data: "Встреча с друзьями", category: "friends" },
    { id: 2, data: "Планерка по проекту Samo", category: "business" },
    {
      id: 3,
      data: "Очень важная встреча с инвесторами проекта",
      category: "business",
    },
    { id: 4, data: "Сходить в театр", category: "brightness" },
    { id: 5, data: "Свидание с Машей", category: "family" },
    { id: 6, data: "Записаться на занятия по йоге", category: "health" },
    {
      id: 7,
      data: "Курсы по саморазвитию и самодисциплине",
      category: "growth",
    },
    { id: 8, data: "Волонтерство", category: "charity" },
  ],
  monthDiary: [
    {
      id: 1,
      headline: "Вывод недели",
      data: "Неделя прошла не зря, понравилось высыпаться",
    },
    {
      id: 2,
      headline: "Достижения недели",
      data: "переборол ненависть к найму, прочитал книгу, написал пост в блог",
    },
    { id: 3, headline: "Добрые дела", data: "спас котёнка" },
  ],
};



// План месяца

const PlanMontn = () => {
  const planMontnItem = json.monthPlan.map((item, i) => {

  return (
    <label key={item.id} className={item.category + " " + "checkbox"}>
      <input type="checkbox" />
      <span> {item.data} </span>
    </label>
  );
});

  return (
    <div className="block plan-month_block">
      <div className="headline_block">
        <h2> План месяца </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      <div className="progress-block">
        3 / {json.monthPlan.length}
        <div className="progress-bar">
          <span style={{ width: "50%" }}> </span>
        </div>
      </div>
      <div className="plan-month_checkbox" id="month_plan">
        {planMontnItem}
      </div>
    </div>
  );
};

// Цель след месяца



const TargetNextMonth = () => {
  const targetNextMonthItem = json.nextMonthTarget.map((item) => {
    return <li className={item.category}> {item.data} </li>;
  });

  return (
    <div className="block target-next-month_block">
      <div className="headline_block">
        <h2> Цели следующего месяца </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      <div>
        <ul className="block_list" id="next_month_target">
          
          {targetNextMonthItem}
        </ul>
      </div>
    </div>
  );
};

// Дневник месяца


const DiaryMonth = () => {
  const diaryMonthItem = json.monthDiary.map((item) => {
    return (
      <div className="diary_paragraph">
        <h2> {item.headline} </h2> <p id="conclusion"> {item.data} </p>
      </div>
      );
  });
  
  return (
    <div className="block diary-month_block">
      <div className="headline_block">
        <h2> Дневник месяца </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      {diaryMonthItem}
    </div>
  );
};

// Цели месяца




const TargetMonth = () => {
  const targetMonthItem = json.monthTarget.map((item) => {
    return (
      <label className={item.category + " " + "checkbox"}>
        <input type="checkbox" />
        <span> {item.data} </span>
      </label>
    );
  });
  return (
    <div className="block target-month_block">
      <div className="headline_block">
        <h2> Цели месяца </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      <div className="progress-block">
        1 / 3
        <div className="progress-bar">
          <span style={{ width: "33%" }}> </span>
        </div>
      </div>
      <div className="target-month_checkbox" id="target-month">
        
        {targetMonthItem}
      </div>
    </div>
  );
};

// План следующего месяца




const PlanNextMonth = () => {

  const planNextMonthItem = json.nextMonthPlan.map((item) => {
    return <li className={item.category}> {item.data} </li>;
  });

  return (
    <div className="block plan-next-month_block">
      <div className="headline_block">
        <h2> План следующего месяца </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      <div>
        <ul className="block_list" id="next_month_plan">
          
          {planNextMonthItem}
        </ul>
      </div>
    </div>
  );
};

// Аналитика

const Analytics = () => {
  return (
    <div className="block analytics">
      <div className="headline_block">
        <h2> Аналитика </h2>
      </div>
      <div className="analytics_body">
        <div className="analytics_paragraph">
          <p> Вовлечённость </p> <span> 90 % </span>
        </div>
        <div className="analytics_paragraph">
          <p> Привычек выполнено </p> <span> 33 % </span>
        </div>
        <div className="analytics_paragraph">
          <p> Страниц книг прочитано </p> <span> 200 / 1000 </span>
        </div>
        <div className="analytics_paragraph">
          <p> Фильмов просмотрено </p> <span> 1 </span>
        </div>
        <div className="analytics_paragraph">
          <p> Самая прокаченная сфера </p>
          <span className="blue_square"> </span>
        </div>
        <div className="analytics_paragraph">
          <p> Сфера, на которую стоит обратить внимание </p>
          <span className="red_square"> </span>
        </div>
      </div>
    </div>
  );
};
