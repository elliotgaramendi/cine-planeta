import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../../components/auth/AuthCard';
import AuthCardHeader from '../../components/auth/AuthCardHeader';
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
            message: 'Pronto implementaremos esta sección para que puedas iniciar sesión y disfrutar de todos los beneficios que tenemos para ti. Mientras tanto, puedes seguir explorando nuestro sitio como invitado.'
          }}
        />
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
            className="auth__secondary-button"
          >
            <i className="bi bi-person-circle"></i> Únete
          </Link>
          <Link
            to="/dulceria"
            className="auth__primary-button auth__primary-button--outline"
          >
            Seguir como invitado
          </Link>
        </div>
      </AuthCard>
    </AuthSection>
  );
};

export default AuthLogin;
