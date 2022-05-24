import './App.css';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import Projects from './Projects';
import Footer from './pages/Footer';
import Header from './pages/Header';
//#region 원래코드
// function App({ children }) {
// function App() {
//   function activeStyle({ isActive }) {
//     return {
//       textDecoration: isActive ? 'underline' : undefined,
//       fontSize: isActive ? '24px' : undefined,
//     };
//   }
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <NavLink to="/" style={activeStyle}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <Link to="/Projects">Projects</Link>
//         </li>
//       </ul>
//       <hr />
//       {/* <div>{children}</div> */}
//       <div>
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// }
//#endregion

function App() {
  return (
    <div>
      <Header />
      <hr />
      <div>
        <Outlet></Outlet>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
