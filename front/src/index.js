import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './App.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {Header} from "./Components/Header/Header";
import {RootLeDev} from "./Pages/RootLeDev/RootLeDev";
import {Realisation} from "./Pages/RootLeDev/Realisation/Realisation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/rootledev" element={<RootLeDev/>} />
            <Route path="/rootledev/articles" element={<RootLeDev/>} />
            <Route path="/rootledev/realisations" element={<RootLeDev/>} />
            <Route path="/rootledev/realisations/:title" element={<RootLeDev />} />
            <Route path="/rootledev/tutos" element={<RootLeDev/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
