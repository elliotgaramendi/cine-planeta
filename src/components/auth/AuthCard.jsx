const AuthCard = ({ children, shadow }) => {
  return (
    <div className={`auth__card ${shadow && 'auth__card--shadow'}`}>
      {children}
    </div>
  );
};

export default AuthCard;