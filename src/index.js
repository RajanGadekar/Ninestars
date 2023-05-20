import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apps from './Apps';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Props from './Props';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <GoogleOAuthProvider clientId="395263138897-rvht8o49ua17uif2hr240mtqco1uv1up.apps.googleusercontent.com">
        <React.StrictMode>
            <Apps/>
        </React.StrictMode>
    </GoogleOAuthProvider> */}
    {/* <Props/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
