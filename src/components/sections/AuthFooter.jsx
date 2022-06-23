import '../../styles/scss/AuthFooter.scss';
import FooterNavFooter from '../footers/FooterNavFooter';

const AuthFooter = () => {
  return (
    <footer className="auth-footer">
      <FooterNavFooter className={'footer-nav-footer--auth'} />
    </footer>
  );
};

export default AuthFooter;