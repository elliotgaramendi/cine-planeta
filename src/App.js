import { Provider } from 'react-redux';
import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import AuthLayout from './layouts/AuthLayout';
import CinemasLayout from './layouts/CinemasLayout';
import AuthLogin from './pages/auth/AuthLogin';
import AuthRegister from './pages/auth/AuthRegister';
import CinemasCandyStore from './pages/cinemas/CinemasCandyStore';
import CinemasHome from './pages/cinemas/CinemasHome';
import store from './redux/store';
import './styles/scss/App.scss';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<CinemasLayout />}>
          <Route path='dulceria' element={<CinemasCandyStore />} />
          <Route index element={<CinemasHome />} />
          <Route path='*' element={<h1 style={{textAlign: 'center'}}>404</h1>} />
        </Route>
        <Route path='/autenticacion' element={<AuthLayout />} >
          <Route path='*' element={<h1 style={{textAlign: 'center'}}>404</h1>} />
          <Route path='registro' element={<AuthRegister />} />
          <Route path='login' element={<AuthLogin />} />
          {/* <Route path='recuperar-contrasena' element={<AuthRecoverPassword />} /> */}
          <Route path='*' element={<h1 style={{textAlign: 'center'}}>404</h1>} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
