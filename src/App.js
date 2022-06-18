import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import CinemasLayout from './layouts/CinemasLayout';
import CinemasHome from './pages/cinemas/CinemasHome';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<CinemasLayout />}>
          <Route path='dulceria' element={<h1>Dulcería</h1>} />
          <Route index element={<CinemasHome />} />
          <Route path='*' element={<h1>404</h1>} />
        </Route>
        <Route path='/autenticacion/login' element={<h1>Login</h1>} />
      </Routes>
    </Provider>
  );
};

export default App;