const AuthCardHeader = ({ content, partner }) => {
  const { title, message } = content;
  return (
    <div className="auth__card-header">
      <h2 className={`auth__card-title ${partner && 'auth__card-title--partner'}`}>{title}</h2>
      <p className={`auth__card-message ${partner && 'auth__card-message--partner'}`}>{message}</p>
    </div>
  );
};

export default AuthCardHeader;