import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAuthLoginError, fetchAuthLoginRequest, fetchAuthLoginSuccess, fetchAuthSignInWithGoogleError, fetchAuthSignInWithGoogleRequest, fetchAuthSignInWithGoogleSuccess } from '../../redux/slices/auth.slices';
import { signIn, signInWithGoogle } from '../../utils/firebase';
import { showToast } from '../../utils/sweetAlert2';
import Swal from 'sweetalert2';

const AuthLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      dispatch(fetchAuthSignInWithGoogleRequest(true));
      const userCredential = await signInWithGoogle();
      const { reloadUserInfo } = userCredential.user;
      dispatch(fetchAuthSignInWithGoogleSuccess(reloadUserInfo));
      localStorage.setItem('user-info', JSON.stringify(reloadUserInfo));
      Swal.fire({
        title: '¡Bienvenido!',
        text: `¡Es un gusto volver a verte ${reloadUserInfo.displayName}!`,
        icon: 'success',
        background: '#20232a',
        color: '#fff',
        confirmButtonColor: '#61dafb80',
        confirmButtonText: '¡Continuar!',
        timer: 2500,
        scrollbarPadding: false
      }).then(() => {
        navigate('/dulceria');
      });
    } catch (error) {
      dispatch(fetchAuthSignInWithGoogleError(error));
      showToast('error', error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={yup.object({
        email: yup.string().email().required('El correo es requerido'),
        password: yup.string().required('La contraseña es requerido').min(6)
      })}
      onSubmit={async (values, actions) => {
        try {
          dispatch(fetchAuthLoginRequest(true));
          const userCredential = await signIn(values);
          const { reloadUserInfo } = userCredential.user;
          dispatch(fetchAuthLoginSuccess(reloadUserInfo));
          actions.setSubmitting(false);
          actions.resetForm();
          localStorage.setItem('user-info', JSON.stringify(reloadUserInfo));
          Swal.fire({
            title: '¡Bienvenido!',
            text: `¡Es un gusto volver a verte ${reloadUserInfo.email}!`,
            icon: 'success',
            background: '#20232a',
            color: '#fff',
            confirmButtonColor: '#61dafb80',
            confirmButtonText: '¡Continuar!',
            timer: 2500,
            scrollbarPadding: false
          }).then(() => {
            navigate('/dulceria');
          });
        } catch (error) {
          dispatch(fetchAuthLoginError(error));
          showToast('error', error.message);
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="auth__form"
          >
            <div className="auth__form-input-container">
              <Field name="email" type="text" placeholder="Email" className="auth__form-input" required />
              <ErrorMessage name="email" component="div" className="auth__form-error" />
            </div>
            <div className="auth__form-input-container">
              <Field name="password" type="password" placeholder="Password" className="auth__form-input" required />
              <ErrorMessage name="password" component="div" className="auth__form-error" />
            </div>
            <div className="auth__button-container auth__button-container--flex-column">
              <Link
                to="/autenticacion/recuperar-contrasena"
                className="auth__form-recover-password"
              >
                ¿Olvidaste tu contraseña?
              </Link>
              <button
                type="submit"
                className="auth__primary-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? <div className="animate-spin"><i className="bi bi-arrow-repeat"></i></div> : <><i className="bi bi-person"></i> Ingresar</>}
              </button>
              <span className="auth__text">o</span>
              <button
                type="button"
                className="auth__primary-button auth__primary-button--outline"
                disabled={isSubmitting}
                onClick={handleSignInWithGoogle}
              >
                {isSubmitting ? <div className="animate-spin"><i className="bi bi-arrow-repeat"></i></div> : <><i className="bi bi-google"></i> Continuar con Google</>}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthLoginForm;