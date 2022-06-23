import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationCard from '../../components/authentication/AuthenticationCard';
import AuthenticationCardHeader from '../../components/authentication/AuthenticationCardHeader';
import AuthenticationRegisterForm from '../../components/authentication/AuthenticationRegisterForm';
import AuthenticationSection from '../../components/authentication/AuthenticationSection';
import '../../styles/scss/AuthenticationRegister.scss';

const AuthenticationRegister = () => {
  useEffect(() => {
    document.title = 'Únete';
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthenticationSection>
      <AuthenticationCard>
        <AuthenticationCardHeader
          content={{
            title: 'Únete',
            message: 'Completa tus datos y accede a nuestro universo de beneficios'
          }}
        />
        <AuthenticationRegisterForm />
      </AuthenticationCard>
      <AuthenticationCard className={'authentication__card--partner'}>
        <AuthenticationCardHeader
          content={{
            title: '¿Ya eres socio?',
            message: 'Iniciando sesión en nuestro programa Socio Cineverse podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.'
          }}
          partner={true}
        />
        <Link
          to="/autenticacion/login"
          className="authentication__button-primary"
        >
          <i className="bi bi-person"></i> Iniciar sesión
        </Link>
      </AuthenticationCard>
    </AuthenticationSection>
  );
};

export default AuthenticationRegister;