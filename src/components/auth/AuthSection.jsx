const AuthSection = ({ children }) => {
  return (
    <section className="auth">
      <div className="auth__container">
        {children}
      </div>
    </section>
  );
};

export default AuthSection;