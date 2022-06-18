import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import CinemasLayout from './layouts/CinemasLayout';
import CinemasHome from './pages/cinemas/CinemasHome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CinemasLayout />}>
        <Route path='dulceria' element={<h1>Dulcería</h1>} />
        <Route index element={<CinemasHome />} />
        <Route path='*' element={<h1>404</h1>} />
      </Route>
      <Route path='/autenticacion/login' element={<h1>Login</h1>} />
    </Routes>
  );
};

export default App;