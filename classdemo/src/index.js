//https://onepagelove.com/inspiration/resume/page/2
//https://www.techomoro.com/create-a-simple-resume-builder-app-using-react/
//https://reactjsexample.com/make-a-standard-one-page-resume-in-5-minutes-with-react/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const LightTheme = React.lazy(() => import('./components/LightTheme'));
const DarkTheme = React.lazy(() => import('./components/DarkTheme'));

const ThemeSelector = ({children}) => {
  const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.setItem('theme', theme)
  return(
    <React.Suspense fallback={<></>} key={theme}>
      {theme === 'dark' && <DarkTheme />}
      {theme === 'light' && <LightTheme />}
      {/* <Button variant="danger">Danger</Button> */}
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

