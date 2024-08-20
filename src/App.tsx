import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import InvoicePage from './pages/InvoicePage/InvoicePage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<InvoicePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
