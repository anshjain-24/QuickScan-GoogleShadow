import React from "react";
import ReactDOM from 'react-dom'

import App from './App';
import './global.css'
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { ResultContextProvider } from "./contexts/ResultContextProvider";

createRoot(document.getElementById('root')).render(
    <ResultContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ResultContextProvider>
);
