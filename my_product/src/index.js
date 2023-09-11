import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import Dashbord from './Dashbord';
// import Cards from './components/Cards/Cards';
// import Parent from './components/parent/Parent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Dashbord />
      {/*<Parent/>*/}
    </StyledEngineProvider>
  </React.StrictMode>
);


reportWebVitals();
