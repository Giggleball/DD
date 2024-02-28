import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import About from "./components/about/about.jsx";
import Home from "./components/home/home.jsx";
import Faq from "./components/faq/faq.jsx";
import Reviews from "./components/reviews/reviews.jsx";

import "./i18n/config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/scss/index.scss';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "about",
        element: <About/>
    },
    {
        path: "faq",
        element: <Faq/>
    },
    {
        path: "reviews",
        element: <Reviews/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router}/>
        </React.Suspense>
    </React.StrictMode>,
)
