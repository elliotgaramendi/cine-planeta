import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import CinemasLayout from './layouts/CinemasLayout';
import CinemasHome from './pages/cinemas/CinemasHome';
import AuthenticationLayout from './layouts/AuthenticationLayout';
import AuthenticationRegister from './pages/authentication/AuthenticationRegister';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<CinemasLayout />}>
          <Route path='dulceria' element={<h1>Dulcería</h1>} />
          <Route index element={<CinemasHome />} />
          <Route path='*' element={<h1>404</h1>} />
        </Route>
        <Route path='/autenticacion' element={<AuthenticationLayout />} >
          <Route path='registro' element={<AuthenticationRegister />} />
          <Route path='login' element={
            <>
              <h1>Login</h1>
              <Link to='/autenticacion/registro' style={{ color: '#0050b2' }}>Únete</Link>
            </>
          } />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;