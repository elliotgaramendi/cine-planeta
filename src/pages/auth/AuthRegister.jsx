import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../../components/auth/AuthCard';
import AuthCardHeader from '../../components/auth/AuthCardHeader';
import AuthSection from '../../components/auth/AuthSection';

const AuthRegister = () => {
  useEffect(() => {
    document.title = 'Únete';
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthSection>
      <AuthCard shadow={true}>
        <AuthCardHeader
          content={{
            title: 'Únete',
            message: 'Pronto implementaremos esta sección para que puedas crear tu cuenta y disfrutar de los beneficios de ser parte de nuestro programa Socio Cineverse.'
          }}
        />
      </AuthCard>
      <AuthCard>
        <AuthCardHeader
          content={{
            title: '¿Ya eres socio?',
            message: 'Iniciando sesión en nuestro programa Socio Cineverse podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.'
          }}
          partner={true}
        />
        <div className="auth__button-container">
          <Link
            to="/autenticacion/login"
            className="auth__primary-button"
          >
            <i className="bi bi-person"></i> Iniciar sesión
          </Link>
        </div>
      </AuthCard>
    </AuthSection>
  );
};

export default AuthRegister;
