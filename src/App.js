import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  Routes,
  Route
} from 'react-router-dom';
import CinemasLayout from './layouts/CinemasLayout';
import CinemasHome from './pages/cinemas/CinemasHome';
import AuthenticationLayout from './layouts/AuthenticationLayout';
import AuthenticationRegister from './pages/authentication/AuthenticationRegister';
import AuthenticationLogin from './pages/authentication/AuthenticationLogin';
import AuthenticationRecoverPassword from './pages/authentication/AuthenticationRecoverPassword';
import CinemasPartner from './components/cinemas/CinemasPartner';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<CinemasLayout />}>
          <Route path='dulceria' element={
            <>
              <CinemasPartner />
              <CinemasPartner />
              <CinemasPartner />
              <CinemasPartner />
              <CinemasPartner />
              <CinemasPartner />
            </>
          } />
          <Route index element={<CinemasHome />} />
          <Route path='*' element={<h1>404</h1>} />
        </Route>
        <Route path='/autenticacion' element={<AuthenticationLayout />} >
          <Route path='registro' element={<AuthenticationRegister />} />
          <Route path='login' element={<AuthenticationLogin />} />
          <Route path='recuperar-contrasena' element={<AuthenticationRecoverPassword />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;