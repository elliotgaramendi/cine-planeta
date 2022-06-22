import { Link } from "react-router-dom";

const CinemasPartner = () => {
  return (
    <section className="home-partner">
      <div className="home-partner__container">
        <div className="home-partner__card-container">
          <h3 className="home-partner__card-title">Bienvenido Socio Cineverse</h3>
          <img src="https://i.postimg.cc/Qxg9CZV5/credit-card-holder.webp" alt="membership card" className="home-partner__card-image" width="204" height="128" loading="lazy" />
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