import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route path='dulceria' element={<h1>Dulcería</h1>} />
        <Route index element={<h1>Home</h1>} />
        <Route path='*' element={<h1>404</h1>} />
      </Route>
      <Route path='/autenticacion/login' element={<h1>Login</h1>} />
    </Routes>
  );
};

export default App;