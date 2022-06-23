import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationCard from '../../components/authentication/AuthenticationCard';
import AuthenticationCardHeader from '../../components/authentication/AuthenticationCardHeader';
import AuthenticationSection from '../../components/authentication/AuthenticationSection';
import '../../styles/scss/AuthenticationLogin.scss';

const AuthenticationLogin = () => {
  useEffect(() => {
    document.title = 'Iniciar sesión';
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthenticationSection>
      <AuthenticationCard>
        <AuthenticationCardHeader
          content={{
            title: 'Iniciar sesión',
            message: 'Ingresa a tu cuenta para disfrutar de tus beneficios, acumular puntos y vivir al máximo la experiencia Cineverse.'
          }}
        />
        <form
          className="authentication-login__card-login-form"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="authentication-login__card-login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="authentication-login__card-login-input"
            required
          />
          <div className="authentication-login__card-login-button-container">
            <Link
              to="/autenticacion/recuperar-contrasena"
              className="authentication-login__card-login-recover"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <button className="authentication-login__card-login-button">
              <i className="bi bi-person"></i> Ingresar
            </button>
          </div>
        </form>
      </AuthenticationCard>
      <AuthenticationCard className={'authentication__card--partner'}>
        <AuthenticationCardHeader
          content={{
            title: '¿No eres socio?',
            message: 'Registrándote en nuestro programa Socio Cineverse podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.'
          }}
          partner={true}
        />
        <div className="authentication-login__card-partner-link-container">
          <Link
            to="/autenticacion/registro"
            className="authentication-login__card-partner-register"
          >
            <i className="bi bi-person-circle"></i> Únete
          </Link>
          <Link
            to="/dulceria"
            className="authentication-login__card-partner-guest authentication-login__card-partner-guest--outline"
          >
            Seguir como invitado
          </Link>
        </div>
      </AuthenticationCard>
    </AuthenticationSection>
  );
};

export default AuthenticationLogin;