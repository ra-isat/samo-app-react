import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App/>
  , document.getElementById('root')
);

// const [data, setData] = useState({});
// fetch('./db.json')
// .then((response) => response.data())
// .then((findresponse) => {
//   setData({
//     data: findresponse
//   })
// })

// const Root = () => {
// return (
//   <>
//     <PlanMontn />
//     <TargetNextMonth />
//     <DiaryMonth />
//     <TargetMonth />
//     <PlanNextMonth />
//     <Analytics/>
//   </>
// );
// };
// // План месяца






// // Цель след месяца
// // const TargetNextMonthItem = () => {
// //   return <li className={data.nextMonthTarget[0].category}>Подписать договор с инвесторами</li>;
// // };
// const targetNextMonthItem = data.nextMonthTarget.map(item => {
//   return <li className={item.category}>{item.data}</li>;
// })

// const TargetNextMonth = () => {
// return (
//   <div className="block target-next-month_block">
//     <div className="headline_block">
//       <h2>Цели следующего месяца</h2>
//       <img src="./icons/pencil.svg" alt="edit" className="edit" />
//     </div>
//     <div>
//       <ul className="block_list" id="next_month_target">
//         {targetNextMonthItem}
//       </ul>
//     </div>
//   </div>
// );
// };

// // Дневник месяца

// const diaryMonthItem = data.monthDiary.map(item => {
//   return (
//   <div className="diary_paragraph">
//       <h2>{item.headline}</h2>
//       <p id="conclusion">{item.data}</p>
//     </div>
//   )
// })
// const DiaryMonth = () => {
// return (
//   <div className="block diary-month_block">
//     <div className="headline_block">
//       <h2>Дневник месяца</h2>
//       <img src="./icons/pencil.svg" alt="edit" className="edit" />
//     </div>
//     {diaryMonthItem}
//   </div>
// );
// };

// // Цели месяца
// // const TargetMonthItem = () => {
// //   return (
// //     <label className="saturday checkbox">
// //       <input type="checkbox" />
// //       <span>Волонтерство</span>
// //     </label>
// //   );
// // };
// const targetMonthItem = data.monthTarget.map(item => {
//   return (
//       <label className={item.category + ' ' + "checkbox"}>
//         <input type="checkbox" />
//         <span>{item.data}</span>
//       </label>
//   )
// })

// const TargetMonth = () => {
// return (
//   <div className="block target-month_block">
//     <div className="headline_block">
//       <h2>Цели месяца</h2>
//       <img src="./icons/pencil.svg" alt="edit" className="edit" />
//     </div>
//     <div className="progress-block">
//       1/3
//       <div className="progress-bar">
//         <span style={{ width: "33%" }}></span>
//       </div>
//     </div>
//     <div className="target-month_checkbox" id="target-month">
//       {targetMonthItem}
//     </div>
//   </div>
// );
// };

// // План следующего месяца

// // const PlanNextMonthItem = () => {
// //   return <li className="monday">Очень важная встреча с инвесторами проекта</li>;
// // };
// const planNextMonthItem = data.nextMonthPlan.map(item => {
//   return <li className={item.category}>{item.data}</li>;
// }) 


// const PlanNextMonth = () => {
// return (
//   <div className="block plan-next-month_block">
//     <div className="headline_block">
//       <h2>План следующего месяца</h2>
//       <img src="./icons/pencil.svg" alt="edit" className="edit" />
//     </div>
//     <div>
//       <ul className="block_list" id="next_month_plan">
//        {planNextMonthItem}
//       </ul>
//     </div>
//   </div>
// );
// };

// // Аналитика

// const Analytics = () => {
// return (
//   <div className="block analytics">
//     <div className="headline_block">
//       <h2>Аналитика</h2>
//     </div>
//     <div className="analytics_body">
//       <div className="analytics_paragraph">
//         <p>Вовлечённость</p>
//         <span>90%</span>
//       </div>
//       <div className="analytics_paragraph">
//         <p>Привычек выполнено</p>
//         <span>33%</span>
//       </div>
//       <div className="analytics_paragraph">
//         <p>Страниц книг прочитано</p>
//         <span>200/1000</span>
//       </div>
//       <div className="analytics_paragraph">
//         <p>Фильмов просмотрено</p>
//         <span>1</span>
//       </div>
//       <div className="analytics_paragraph">
//         <p>Самая прокаченная сфера</p>
//         <span className="blue_square"></span>
//       </div>
//       <div className="analytics_paragraph">
//         <p>Сфера, на которую стоит обратить внимание</p>
//         <span className="red_square"></span>
//       </div>
//     </div>
//   </div>
// );
// };
// ReactDOM.render(<Root />, document.getElementById("root"));

