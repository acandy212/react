import React from 'react';
import ReactDOM from 'react-dom/client';
//import './sass/App.scss';
import App from './App';

const LightTheme = React.lazy(() => import('./components/LightTheme'));
const DarkTheme = React.lazy(() => import('./components/DarkTheme'));

const ThemeSelector = ({children}) => {
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
  return(
    <React.Suspense fallback={<></>} >
      {theme === 'dark' && <DarkTheme />}
      {theme === 'light' && <LightTheme />}
      {children}
    </React.Suspense>
  )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeSelector>
      <App />
    </ThemeSelector>
  </React.StrictMode>
);

