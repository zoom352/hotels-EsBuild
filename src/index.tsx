import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App'
import './second.css'
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const store = setupStore()

if(!rootElement) {
    throw new Error('root not found')
}

const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
