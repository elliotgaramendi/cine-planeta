import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationSection from '../../components/authentication/AuthenticationSection';
import '../../styles/scss/AuthenticationRegister.scss';

const AuthenticationRegister = () => {
  useEffect(() => {
    document.title = 'Únete';
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthenticationSection>
      <div className="authentication-register__card-register">
        <div className="authentication-register__card-register-header">
          <h2 className="authentication-register__card-register-title">Únete</h2>
          <p className="authentication-register__card-register-message">Completa tus datos y accede a nuestro universo de beneficios</p>
        </div>
        <form
          className="authentication-register__card-register-form"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="authentication-register__card-register-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="authentication-register__card-register-input"
            required
          />
          <button className="authentication-register__card-register-button">
            <i className="bi bi-person-circle"></i> Unirme
          </button>
        </form>
      </div>
      <div className="authentication-register__card-partner">
        <div className="authentication-register__card-partner-header">
          <h3 className="authentication-register__card-partner-title">¿Ya eres socio?</h3>
          <p className="authentication-register__card-partner-message">Iniciando sesión en nuestro programa Socio Cineverse podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.</p>
        </div>
        <Link
          to="/autenticacion/login"
          className="authentication-register__card-partner-login"
        >
          <i className="bi bi-person"></i> Iniciar sesión
        </Link>
      </div>
    </AuthenticationSection>
  );
};

export default AuthenticationRegister;