import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationCard from '../../components/authentication/AuthenticationCard';
import AuthenticationCardHeader from '../../components/authentication/AuthenticationCardHeader';
import AuthenticationLoginForm from '../../components/authentication/AuthenticationLoginForm';
import AuthenticationSection from '../../components/authentication/AuthenticationSection';

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
        <AuthenticationLoginForm />
      </AuthenticationCard>
      <AuthenticationCard className={'authentication__card--partner'}>
        <AuthenticationCardHeader
          content={{
            title: '¿No eres socio?',
            message: 'Registrándote en nuestro programa Socio Cineverse podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.'
          }}
          partner={true}
        />
        <div className="authentication__button-container">
          <Link
            to="/autenticacion/registro"
            className="authentication__button-secondary"
          >
            <i className="bi bi-person-circle"></i> Únete
          </Link>
          <Link
            to="/dulceria"
            className="authentication__button-primary authentication__button-primary--outline"
          >
            Seguir como invitado
          </Link>
        </div>
      </AuthenticationCard>
    </AuthenticationSection>
  );
};

export default AuthenticationLogin;