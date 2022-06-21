import { Link } from 'react-router-dom';
import '../../styles/scss/AuthenticationRegister.scss';

const AuthenticationRegister = () => {
  return (
    <section className="authentication-register">
      <div className="authentication-register__container">
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
            <button className="authentication-register__card-register-button bg-blue-800 hover:bg-blue-900 py-2 rounded text-white font-bold">
              <i class="bi bi-person-circle"></i> Unirme
            </button>
          </form>
        </div>
        <div className="authentication-register__card-partner flex items-center justify-between">
          <div className="authentication-register__card-partner-header">
            <h3 className="authentication-register__card-partner-title">¿Ya eres socio?</h3>
            <p className="authentication-register__card-partner-message">Iniciando sesión en nuestro programa Socio Cineverse podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.</p>
          </div>
          <Link
            to="/autenticacion/login"
            className="authentication-register__card-partner-button"
          >
            <i class="bi bi-person"></i> Iniciar sesión
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationRegister;