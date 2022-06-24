import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { logOutAuth } from "../../redux/slices/auth.slices";

const CinemasCandyStore = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Saldras de Cineverse!",
      icon: 'question',
      background: '#20232a',
      color: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#61dafb80',
      cancelButtonColor: '#dc143c',
      confirmButtonText: '¡Sí!',
      cancelButtonText: '¡No!',
      reverseButtons: true,
      timer: 5000,
      scrollbarPadding: false
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logOutAuth());
        localStorage.removeItem('user-info');
        navigate('/');
        Swal.fire(
          {
            title: 'Saliendo',
            text: 'Esperemos verte pronto',
            icon: 'warning',
            background: '#20232a',
            color: '#fff',
            confirmButtonColor: '#61dafb80',
            confirmButtonText: 'Cerrar',
            timer: 2500,
            scrollbarPadding: false
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          {
            title: 'Cancelado',
            text: 'Te mantienes en Cineverse',
            icon: 'error',
            background: '#20232a',
            color: '#fff',
            confirmButtonColor: '#61dafb80',
            confirmButtonText: 'Cerrar',
            timer: 2500,
            scrollbarPadding: false
          }
        );
      }
    });
  };

  useEffect(() => {
    document.title = 'Dulcería';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section">
      <div className="section__container">
        <h1 className="section__title">Bienvenido {(user.displayName ?? user.email) ?? 'Invitado'} a la Dulcería de Cineverse</h1>
        {
          user.email &&
          <button
            className="section__secondary-button"
            onClick={handleClick}
          >
            Cerrar sesión
          </button>
        }
      </div>
    </section>
  );
};

export default CinemasCandyStore;