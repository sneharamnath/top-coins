import './App.css';
import 'purecss/build/pure-min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar/NavbarComponent';
import CoinsBoard from './pages/CoinsBoard/CoinsBoard';
import LiquidityInfo from './pages/LiquidityInfo/LiquidityInfo';
import CoinContextProvider from './context/CoinContext';
import SelectComponent from './components/Select/SelectComponent';


function App() {
  return (
    <CoinContextProvider>
      <BrowserRouter>
        <>
          <NavbarComponent />
          <SelectComponent />
        </>
        <Routes>
          <Route path="/" element={<CoinsBoard />} />
          <Route path="/liquidity" element={<LiquidityInfo />} />
        </Routes>
      </BrowserRouter>
    </CoinContextProvider>
  );
}

export default App;
