const AuthenticationCard = ({ children, className }) => {
  return (
    <div className={`authentication__card ${className}`}>
      {children}
    </div>
  );
};

export default AuthenticationCard;