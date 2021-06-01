import React from "react";
import "../index.css";


export class Sidenav extends React.Component {
  state = {
    showSidenav: true
  }
  toggleSidenav = () => {
    this.setState({
      showSidenav: !this.state.showSidenav
    })
  }
  render() {
    console.log('render');
    return (
      <div className="sidenav">
        <h1 style={{display: "none;"}} className="logo_h">
          S
        </h1>
        <h1 className="logo_h">Samo</h1>
        <hr />
        <ul>
          <li style={{marginBottom: '20px;'}}>
            <a className="closebtn">
              <img
                className="toggle active"
                src="../icons/sidebar/open.svg"
                alt="close"
                onClick={this.toggleSidenav}
              />
             
              <span >Свернуть</span>
              
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="img img_active"
                src="../icons/sidebar/balance-wheels.svg"
                alt="balance"
              />
              <span>Колесо баланса</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="img_nav img_active"
                src="../icons/sidebar/diary.svg"
                alt="diary"
              />
              <span>Дневник</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="img_nav img_active"
                src="../icons/sidebar/calendar.svg"
                alt="calendar"
              />
              <span>Календарь</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="img_nav img_active"
                src="../icons/sidebar/purposes.svg"
                alt="purpose"
              />
              <span>Мои цели</span>
            </a>
          </li>
          <li>
            <a href="values.html">
              <img
                className="img_nav img_active"
                src="../icons/sidebar/values.svg"
                alt="values"
              />
              <span>Мои ценности</span>
            </a>
          </li>
          <li className="active_li">
            <a href="#">
              <img
                className="img_nav img_active"
                src="../icons/sidebar/results.svg"
                alt="results"
              />
              <span>Итоги</span>
            </a>
          </li>
          <li style={{marginBottom: "108px;"}}>
            <a href="#">
              <img
                className="img_nav img_active"
                src="../icons/sidebar/list.svg"
                alt="list"
              />
              <span>
                Список книг
                <br /> и фильмов
              </span>
            </a>
          </li>
          <li style={{marginBottom: "8px;"}}>
            <a href="#">
              <img
                className="img_nav img_active"
                src="../icons/sidebar/settings.svg"
                alt="settings"
              />
              <span>Настройки</span>
            </a>
          </li>
        </ul>
        <button className="btn btn_active">Выйти</button>
      </div>
    );
  }
  
};


// export const Sidenav = () => {
//   return (
//     <div className="sidenav">
//       <h1 style={{display: "none;"}} className="logo_h">
//         S
//       </h1>
//       <h1 className="logo_h">Samo</h1>
//       <hr />
//       <ul>
//         <li style={{marginBottom: '20px;'}}>
//           <a className="closebtn">
//             <img
//               className="toggle active"
//               src="../icons/sidebar/open.svg"
//               alt="close"
//             />
//             <span>Свернуть</span>
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <img
//               className="img img_active"
//               src="../icons/sidebar/balance-wheels.svg"
//               alt="balance"
//             />
//             <span>Колесо баланса</span>
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <img
//               className="img_nav img_active"
//               src="../icons/sidebar/diary.svg"
//               alt="diary"
//             />
//             <span>Дневник</span>
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <img
//               className="img_nav img_active"
//               src="../icons/sidebar/calendar.svg"
//               alt="calendar"
//             />
//             <span>Календарь</span>
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <img
//               className="img_nav img_active"
//               src="../icons/sidebar/purposes.svg"
//               alt="purpose"
//             />
//             <span>Мои цели</span>
//           </a>
//         </li>
//         <li>
//           <a href="values.html">
//             <img
//               className="img_nav img_active"
//               src="../icons/sidebar/values.svg"
//               alt="values"
//             />
//             <span>Мои ценности</span>
//           </a>
//         </li>
//         <li className="active_li">
//           <a href="#">
//             <img
//               className="img_nav img_active"
//               src="../icons/sidebar/results.svg"
//               alt="results"
//             />
//             <span>Итоги</span>
//           </a>
//         </li>
//         <li style={{marginBottom: "108px;"}}>
//           <a href="#">
//             <img
//               className="img_nav img_active"
//               src="../icons/sidebar/list.svg"
//               alt="list"
//             />
//             <span>
//               Список книг
//               <br /> и фильмов
//             </span>
//           </a>
//         </li>
//         <li style={{marginBottom: "8px;"}}>
//           <a href="#">
//             <img
//               className="img_nav img_active"
//               src="../icons/sidebar/settings.svg"
//               alt="settings"
//             />
//             <span>Настройки</span>
//           </a>
//         </li>
//       </ul>
//       <button className="btn btn_active">Выйти</button>
//     </div>
//   );
// };
