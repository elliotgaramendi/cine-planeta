const AuthCard = ({ children, className }) => {
  return (
    <div className={`auth__card ${className}`}>
      {children}
    </div>
  );
};

export default AuthCard;