const AuthenticationCardHeader = ({ content, partner }) => {
  const { title, message } = content;
  return (
    <div className="authentication__card-header">
      <h2 className={`authentication__card-title ${partner && 'authentication__card-title--partner'}`}>{title}</h2>
      <p className={`authentication__card-message ${partner && 'authentication__card-message--partner'}`}>{message}</p>
    </div>
  );
};

export default AuthenticationCardHeader;