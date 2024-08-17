import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import InvoiceList from './pages/InvoiceList/InvoiceList';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<InvoiceList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
