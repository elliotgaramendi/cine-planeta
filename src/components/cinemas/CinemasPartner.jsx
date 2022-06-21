import { Link } from "react-router-dom";

const CinemasPartner = () => {
  return (
    <section className="home-partner">
      <div className="home-partner__container">
        <div className="home-partner__card-container">
          <h3 className="home-partner__card-title">Bienvenido Socio Cineverse</h3>
          <img src="https://cdn.pixabay.com/photo/2018/08/31/02/28/credit-3643710_960_720.png" alt="membership card" className="home-partner__card-image" />
          <p className="home-partner__card-message">¿Estás preparado para vivir la mejor experiencia y gozar por los mejores beneficios? Socio Cineverse es lo que tanto deseabas.</p>
          <div className="home-partner__card-button-container">
            <Link to={`/autenticacion/login`} className="home-partner__card-login-button home-partner__card-login-button--outline">
              Inicia
            </Link>
            <Link to={`/autenticacion/registro`} className="home-partner__card-register-button">
              Únete
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinemasPartner;