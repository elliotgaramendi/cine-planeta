import { Link } from 'react-router-dom';
import '../../styles/scss/AuthenticationLogin.scss';

const AuthenticationLogin = () => {
  return (
    <section className="authentication-login">
      <div className="authentication-login__container">
        <div className="authentication-login__card-login">
          <div className="authentication-login__card-login-header">
            <h2 className="authentication-login__card-login-title">Iniciar sesión</h2>
            <p className="authentication-login__card-login-message">Ingresa a tu cuenta para disfrutar de tus beneficios, acumular puntos y vivir al máximo la experiencia Cineverse.</p>
          </div>
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
                <i class="bi bi-person"></i> Ingresar
              </button>
            </div>
          </form>
        </div>
        <div className="authentication-login__card-partner">
          <div className="authentication-login__card-partner-header">
            <h3 className="authentication-login__card-partner-title">¿No eres socio?</h3>
            <p className="authentication-login__card-partner-message">Registrándote en nuestro programa Socio Cineverse podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.</p>
          </div>
          <div className="authentication-login__card-partner-link-container">
            <Link
              to="/autenticacion/registro"
              className="authentication-login__card-partner-register"
            >
              <i class="bi bi-person-circle"></i> Únete
            </Link>
            <Link
              to="/dulceria"
              className="authentication-login__card-partner-guest authentication-login__card-partner-guest--outline"
            >
              Seguir como invitado
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationLogin;