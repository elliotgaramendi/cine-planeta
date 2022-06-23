import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationCard from '../../components/authentication/AuthenticationCard';
import AuthenticationCardHeader from '../../components/authentication/AuthenticationCardHeader';
import AuthenticationRecoverPasswordForm from '../../components/authentication/AuthenticationRecoverPasswordForm';
import AuthenticationSection from '../../components/authentication/AuthenticationSection';
import '../../styles/scss/AuthenticationRecoverPassword.scss';

const AuthenticationRecoverPassword = () => {
  useEffect(() => {
    document.title = '¿Olvidaste tu contraseña?';
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthenticationSection>
      <AuthenticationCard>
        <AuthenticationCardHeader
          content={{
            title: '¿Olvidaste tu contraseña?',
            message: 'Ingresa tu dirección de email registrada y te enviaremos un correo para que puedas crear una nueva contraseña.'
          }}
        />
        <AuthenticationRecoverPasswordForm />
      </AuthenticationCard>
      <AuthenticationCard className={'authentication__card--partner'}>
        <AuthenticationCardHeader
          content={{
            title: '¿Algo anda mal?',
            message: '¿Ya tienes cuenta? o ¿No tienes cuenta?'
          }}
          partner={true}
        />
        <div className="authentication-recover__card-partner-link-container">
          <Link
            to="/autenticacion/login"
            className="authentication-recover__card-partner-login"
          >
            <i className="bi bi-person"></i> Iniciar sesión
          </Link>
          <Link
            to="/autenticacion/registro"
            className="authentication-recover__card-partner-register"
          >
            <i className="bi bi-person-circle"></i> Únete
          </Link>
        </div>
      </AuthenticationCard>
    </AuthenticationSection>
  );
};

export default AuthenticationRecoverPassword;