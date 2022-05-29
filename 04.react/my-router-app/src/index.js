import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Project from "./Project";
import NotFound from "./NotFound";
import Login from "./Login";
import MyPage from "./MyPage";
import Posts from "./pages/Posts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //#region 원래코드
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} App>
        <Route index element={<Home />} />
        <Route path="/Projects">
          <Route index element={<Projects />} />
          {/* <Route path="1" element={<Project />} /> */}
          {/* <Route path="2" element={<Project />} />
          <Route path="3" element={<Project />} /> */}
          <Route path=":projectNumber" element={<Project />} />
        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/mypage" element={<MyPage></MyPage>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  //#endregion

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} App>
  //       <Route index element={<Posts />} />
  //     </Route>
  //     <Route path="*" element={<NotFound />} />
  //   </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
