import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import InvoicePage from './pages/InvoicePage/InvoicePage';
import { useState } from "react";
import InvoiceInfo from './pages/InvoiceInfo/InvoiceInfo';

function App() {
  const [mode, setMode] = useState("light");

  return (
    <BrowserRouter>
      <Header mode={mode} setMode={setMode}/>
      <Routes>
        <Route path="/" element={<InvoicePage mode={mode}/>}></Route>
        <Route path="/info" element={<InvoiceInfo/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
