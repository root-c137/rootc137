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
import {Contact} from "./Pages/Contact/Contact";
import {Admin} from "./Pages/Admin";
import {Login} from "./Pages/Login/Login";
import {Protected} from "./Components/Protected/Protected";
import {Users} from "./Pages/Admin/Users/Users";
import {Page404} from "./Pages/404/Page404";


export const BaseUploasPath = "http://localhost:8000/uploads/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/rootledev" element={<RootLeDev/>} />
            <Route path="/rootledev/articles" element={<RootLeDev/>} />
            <Route path="/rootledev/articles/:title" element={<RootLeDev/>} />
            <Route path="/rootledev/realisations" element={<RootLeDev/>} />
            <Route path="/rootledev/realisations/:title" element={<RootLeDev />} />
            <Route path="/rootledev/tutos" element={<RootLeDev/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />


            <Route path="/admin" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/users" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/users/:id" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/articles" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/articles/add" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/articles/:id" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/sections" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/sections/:id" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/sections/add" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/projects/" element={<Protected><Admin/></Protected>} />
            <Route path="/admin/projects/:id" element={<Protected><Admin/></Protected>} />

        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
