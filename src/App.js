import ButtonGen from './components/ButtonGen';
import NavBar from './components/NavBar';
import InputGen from './components/InputGen';
import ShadowGen from './components/ShadowGen';
import Home from './components/Home';
import './App.css';
import { useState } from 'react';
import ButtonCssResult from './components/ButtonCssResult';
import ShadowCssResult from './components/ShadowCssResult';

function App() {
  const [section,setSection]=useState('home')
  return (
    <div className="App">
      <NavBar setSection={setSection}/>
      {section === 'home' && <Home/>}
      {section==='buttons' && 
      <>
      <ButtonGen/> 
      <ButtonCssResult/>
      </>
      }
      {section==='shadows' && 
      <>
      <ShadowGen/> 
      <ShadowCssResult/>
      </> }
      {section ==='inputs' && <InputGen/>}
    </div>
  );
}

export default App;
