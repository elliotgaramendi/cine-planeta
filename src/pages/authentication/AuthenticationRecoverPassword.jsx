import { Link } from 'react-router-dom';
import '../../styles/scss/AuthenticationRecoverPassword.scss';

const AuthenticationRecoverPassword = () => {
  return (
    <section className="authentication-recover">
      <div className="authentication-recover__container">
        <div className="authentication-recover__card-recover">
          <div className="authentication-recover__card-recover-header">
            <h2 className="authentication-recover__card-recover-title">¿Olvidaste tu contraseña?</h2>
            <p className="authentication-recover__card-recover-message">Ingresa tu dirección de email registrada y te enviaremos un correo para que puedas crear una nueva contraseña.</p>
          </div>
          <form
            className="authentication-recover__card-recover-form"
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="authentication-recover__card-recover-input"
              required
            />
            <div className="authentication-recover__card-recover-button-container">
              <Link
                to="/autenticacion/login"
                className="authentication-recover__card-recover-login authentication-recover__card-recover-login--outline"
              >
                Cancelar
              </Link>
              <button
                className="authentication-recover__card-recover-button"
              >
                Continuar <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="authentication-recover__card-partner">
          <div className="authentication-recover__card-partner-header">
            <h3 className="authentication-recover__card-partner-title">¿Algo anda mal?</h3>
            <p className="authentication-recover__card-partner-message">¿Ya tienes cuenta? o ¿No tienes cuenta?</p>
          </div>
          <div className="authentication-recover__card-partner-link-container">
            <Link
              to="/autenticacion/login"
              className="authentication-recover__card-partner-login"
            >
              <i class="bi bi-person"></i> Iniciar sesión
            </Link>
            <Link
              to="/autenticacion/registro"
              className="authentication-recover__card-partner-register"
            >
              <i class="bi bi-person-circle"></i> Únete
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationRecoverPassword;