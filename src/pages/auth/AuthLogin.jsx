import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../../components/auth/AuthCard';
import AuthCardHeader from '../../components/auth/AuthCardHeader';
import AuthLoginForm from '../../components/auth/AuthLoginForm';
import AuthSection from '../../components/auth/AuthSection';

const AuthLogin = () => {
  useEffect(() => {
    document.title = 'Iniciar sesión';
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthSection>
      <AuthCard shadow={true}>
        <AuthCardHeader
          content={{
            title: 'Iniciar sesión',
            message: 'Ingresa a tu cuenta para disfrutar de tus beneficios, acumular puntos y vivir al máximo la experiencia Cineverse.'
          }}
        />
        <AuthLoginForm />
      </AuthCard>
      <AuthCard>
        <AuthCardHeader
          content={{
            title: '¿No eres socio?',
            message: 'Registrándote en nuestro programa Socio Cineverse podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.'
          }}
          partner={true}
        />
        <div className="auth__button-container">
          <Link
            to="/autenticacion/registro"
            className="auth__button-secondary"
          >
            <i className="bi bi-person-circle"></i> Únete
          </Link>
          <Link
            to="/dulceria"
            className="auth__button-primary auth__button-primary--outline"
          >
            Seguir como invitado
          </Link>
        </div>
      </AuthCard>
    </AuthSection>
  );
};

export default AuthLogin;