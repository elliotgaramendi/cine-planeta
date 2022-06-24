import { useSelector } from "react-redux";

const useAuth = () => {
  return (useSelector(state => state.authStore));
};

export default useAuth;