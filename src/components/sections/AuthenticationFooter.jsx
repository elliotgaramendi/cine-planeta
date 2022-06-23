import '../../styles/scss/AuthenticationFooter.scss';
import FooterNavFooter from '../footers/FooterNavFooter';

const AuthenticationFooter = () => {
  return (
    <footer className="authentication-footer">
      <FooterNavFooter className={'footer-nav-footer--authentication'} />
    </footer>
  );
}

export default AuthenticationFooter;