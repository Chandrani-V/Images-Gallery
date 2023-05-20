import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App'; // ./is current folder


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//document is global element. this root element is in index.html file
    //that div there is used for insertion of our reacat app 

  <React.StrictMode>
    <App />       
  </React.StrictMode>//this is JSX syntax used for creating an react element used by react
);//App is react component imported from another file

//if u want to use JSX syntax directly u can write as {a? <App/> : <h1></h1>}
