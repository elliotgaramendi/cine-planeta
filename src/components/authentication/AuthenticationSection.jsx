import '../../styles/scss/Authentication.scss';

const AuthenticationSection = ({ children }) => {
  return (
    <section className="authentication">
      <div className="authentication__container">
        {children}
      </div>
    </section>
  );
};

export default AuthenticationSection;