import useAuth from "../../hooks/useAuth";

const CinemasCandyStore = () => {
  const { user } = useAuth();

  return (
    <section className="section">
      <div className="section__container">
        <h1 className="section__title">Bienvenido {user.email} a la Dulcería de Cineverse</h1>
      </div>
    </section>
  );
};

export default CinemasCandyStore;