import { useSelector } from "react-redux";

const useCinemas = () => {
  return (useSelector(state => state.cinemasStore));
};

export default useCinemas;