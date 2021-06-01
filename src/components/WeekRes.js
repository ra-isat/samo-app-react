import React from "react";
import "../index.css";

// export const Results = () => {
//   return (
//     <>
//       <PlanWeek />
//       <TargetNextWeek />
//       <DiaryWeek/>
//       <TargetWeek />
//       <PlanNextWeek />
//       <Analytics />
//     </>
//   );
// };
export const WeekResult = () => {
  return (
    <>
      <PlanWeek />
      <TargetNextWeek />
      <DiaryWeek/>
      <TargetWeek />
      <PlanNextWeek />
      <Analytics />
    </>
  );
};

const json = {
  weekPlan: [
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
  weekTarget: [
    { id: 1, status: 0, data: "Внедрить медитации", category: "brightness" },
    { id: 2, status: 1, data: "Решить семейное", category: "family" },
    {
      id: 3,
      status: 0,
      data: "Показать ребятам первую MVP SAMO",
      category: "business",
    },
  ],
  nextWeekTarget: [
    { id: 1, data: "Подписать договор с инвесторами", category: "business" },
    { id: 2, data: "всякие цели", category: "brightness" },
    { id: 3, data: "просыпаться раньше", category: "growth" },
  ],
  nextWeekPlan: [
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
  weekDiary: [
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



const PlanWeek = () => {
  const planWeekItem = json.weekPlan.map((item, i) => {

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
        <h2> План недели </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      <div className="progress-block">
        3 / {json.weekPlan.length}
        <div className="progress-bar">
          <span style={{ width: "50%" }}> </span>
        </div>
      </div>
      <div className="plan-month_checkbox" id="month_plan">
        {planWeekItem}
      </div>
    </div>
  );
};

// Цель след недели



const TargetNextWeek = () => {

  const targetNextWeekItem = json.nextWeekTarget.map((item) => {
    return <li className={item.category}> {item.data} </li>;
  });

  return (
    <div className="block target-next-month_block">
      <div className="headline_block">
        <h2> Цели следующей недели </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      <div>
        <ul className="block_list" id="next_month_target">
          
          {targetNextWeekItem}
        </ul>
      </div>
    </div>
  );
};

// Дневник недели


const DiaryWeek = () => {

  const diaryWeekItem = json.weekDiary.map((item) => {
    return (
      <div className="diary_paragraph">
        <h2> {item.headline} </h2> <p id="conclusion"> {item.data} </p>
      </div>
    );
  });

  return (
    <div className="block diary-month_block">
      <div className="headline_block">
        <h2> Дневник недели </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      {diaryWeekItem}
    </div>
  );
};




const TargetWeek = () => {

  const targetWeekItem = json.weekTarget.map((item) => {
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
        <h2> Цели недели </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      <div className="progress-block">
        1 / 3
        <div className="progress-bar">
          <span style={{ width: "33%" }}> </span>
        </div>
      </div>
      <div className="target-month_checkbox" id="target-month">
        
        {targetWeekItem}
      </div>
    </div>
  );
};

// План следующей недели




const PlanNextWeek = () => {

  const planNextWeekItem = json.nextWeekPlan.map((item) => {
    return <li className={item.category}> {item.data} </li>;
  });
  
  return (
    <div className="block plan-next-month_block">
      <div className="headline_block">
        <h2> План следующей недели </h2>
        <img src="./icons/pencil.svg" alt="edit" className="edit" />
      </div>
      <div>
        <ul className="block_list" id="next_month_plan">
          
          {planNextWeekItem}
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
