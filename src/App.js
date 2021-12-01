import './App.css';
import 'purecss/build/pure-min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar/NavbarComponent';
import CoinsBoard from './pages/CoinsBoard/CoinsBoard';
import LiquidityInfo from './pages/LiquidityInfo/LiquidityInfo';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarComponent />
      </div>
      <Routes>
        <Route path="/liquidity" element={<LiquidityInfo />} />
        <Route path="/" element={<CoinsBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
