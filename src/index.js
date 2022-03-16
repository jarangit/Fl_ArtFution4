import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./routers/Page1";
import Layout from "./components/Layout";
ReactDOM.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="page1" element={<Page1 />} />
      </Routes>
    </Layout>
    {/* </React.StrictMode> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
