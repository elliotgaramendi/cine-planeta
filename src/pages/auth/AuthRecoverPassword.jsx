import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../../components/auth/AuthCard';
import AuthCardHeader from '../../components/auth/AuthCardHeader';
import AuthRecoverPasswordForm from '../../components/auth/AuthRecoverPasswordForm';
import AuthSection from '../../components/auth/AuthSection';

const AuthRecoverPassword = () => {
  useEffect(() => {
    document.title = '¿Olvidaste tu contraseña?';
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader
          content={{
            title: '¿Olvidaste tu contraseña?',
            message: 'Ingresa tu dirección de email registrada y te enviaremos un correo para que puedas crear una nueva contraseña.'
          }}
        />
        <AuthRecoverPasswordForm />
      </AuthCard>
      <AuthCard className={'auth__card--partner'}>
        <AuthCardHeader
          content={{
            title: '¿Algo anda mal?',
            message: '¿Ya tienes cuenta? o ¿No tienes cuenta?'
          }}
          partner={true}
        />
        <div className="auth__button-container">
          <Link
            to="/autenticacion/login"
            className="auth__button-primary"
          >
            <i className="bi bi-person"></i> Iniciar sesión
          </Link>
          <Link
            to="/autenticacion/registro"
            className="auth__button-secondary"
          >
            <i className="bi bi-person-circle"></i> Únete
          </Link>
        </div>
      </AuthCard>
    </AuthSection>
  );
};

export default AuthRecoverPassword;