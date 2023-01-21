import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './UserStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const AppContext = createContext(null)

root.render(
  <AppContext.Provider value={{
    user: new UserStore()
  }}>
    <App />
  </AppContext.Provider>
);

reportWebVitals();
