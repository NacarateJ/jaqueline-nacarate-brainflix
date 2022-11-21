import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// tree structure
// index.js - will call
// App.js - will call 3 other files
//       Header.js
//       HomePage.js
//       UploadsPage.js
//       SuccessPage.js

// HomePage.js - now call
//       MainVideo.js
//       Commnents.js
//       SideBar.js
