import './App.css';
import './styles/scss/App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  Routes,
  Route
} from 'react-router-dom';
import CinemasLayout from './layouts/CinemasLayout';
import CinemasHome from './pages/cinemas/CinemasHome';
import AuthLayout from './layouts/AuthLayout';
import AuthRegister from './pages/auth/AuthRegister';
import AuthLogin from './pages/auth/AuthLogin';
import AuthRecoverPassword from './pages/auth/AuthRecoverPassword';
import CinemasCandyStore from './pages/cinemas/CinemasCandyStore';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<CinemasLayout />}>
          <Route path='dulceria' element={<CinemasCandyStore />} />
          <Route index element={<CinemasHome />} />
          <Route path='*' element={<h1>404</h1>} />
        </Route>
        <Route path='/autenticacion' element={<AuthLayout />} >
          <Route path='registro' element={<AuthRegister />} />
          <Route path='login' element={<AuthLogin />} />
          <Route path='recuperar-contrasena' element={<AuthRecoverPassword />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;