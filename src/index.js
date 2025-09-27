import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import HEADER from './components/Header'
  import FOOTER from './components/Footer'
import Shop from './components/Shop'
  import BRIDAL from './components/Bridal'
import OFFER from './components/offer'
import Content  from './components/content'
import CONTACT from './components/Contact'
import LOCATER from './components/locator'
import FRENCH from './components/french'
import RR from './components/RunwayRewads'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
<BrowserRouter>
<HEADER/>
<Routes>
  <Route path="/" element={<App/>}></Route>
   <Route path="/Shop" element={<Shop/>}></Route>
   <Route path='/Bridal' element={<BRIDAL/>}></Route>
    <Route path='/offer' element={<OFFER/>}></Route>
      <Route path='/french' element={<FRENCH/>}></Route>
        <Route path='/locator' element={<LOCATER/>}></Route>
        <Route path='/Contact' element={<CONTACT/>}></Route>
        <Route path='/content' element={<Content/>}></Route>
        <Route path='/RunwayRewads' element={<RR/>}></Route>
        
        

  
</Routes>
<FOOTER/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
