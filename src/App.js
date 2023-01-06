import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './components/dashboard';
import Booking from './components/booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={`/`} element={<Dashboard />} />
        <Route exact path={`/booking`} element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
