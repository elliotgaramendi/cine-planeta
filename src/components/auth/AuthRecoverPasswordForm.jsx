import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAuthRecoverPasswordError, fetchAuthRecoverPasswordRequest, fetchAuthRecoverPasswordSuccess } from '../../redux/slices/auth.slices';
import { recoverPassword } from '../../utils/firebase';
import Swal from 'sweetalert2';
import { showToast } from '../../utils/sweetAlert2';

const AuthRecoverPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={yup.object({
        email: yup.string().email().required('El correo es requerido')
      })}
      onSubmit={async (values, actions) => {
        try {
          dispatch(fetchAuthRecoverPasswordRequest(true));
          await recoverPassword(values);
          dispatch(fetchAuthRecoverPasswordSuccess());
          actions.setSubmitting(false);
          actions.resetForm();
          Swal.fire({
            title: values.email,
            text: `¡Revisar su bandeja de entrada o spam!`,
            icon: 'success',
            background: '#20232a',
            color: '#fff',
            confirmButtonColor: '#61dafb80',
            confirmButtonText: '¡Continuar!',
            timer: 5000,
            scrollbarPadding: false
          }).then(() => {
            navigate('/autenticacion/login');
          });
        } catch (error) {
          dispatch(fetchAuthRecoverPasswordError(error));
          showToast('error', error.message);
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => {
        console.log(isSubmitting);
        return (
          <Form
            onSubmit={handleSubmit}
            className="auth__form"
          >
            <div className="auth__form-input-container">
              <Field name="email" type="text" placeholder="Email" className="auth__form-input" required />
              <ErrorMessage name="email" component="div" className="auth__form-error" />
            </div>
            <div className="auth__button-container">
              {
                isSubmitting ||
                <Link
                  to="/autenticacion/login"
                  className="auth__primary-button auth__primary-button--outline"
                >
                  Cancelar
                </Link>
              }
              <button
                type="submit"
                className="auth__primary-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? <div className="animate-spin"><i className="bi bi-arrow-repeat"></i></div> : <>Recuperar <i className="bi bi-chevron-right"></i></>}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthRecoverPasswordForm;