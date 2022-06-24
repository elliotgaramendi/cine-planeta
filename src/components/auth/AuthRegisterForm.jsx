import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../utils/firebase';
import { fetchAuthRegisterError, fetchAuthRegisterRequest, fetchAuthRegisterSuccess } from '../../redux/slices/auth.slices';
import { showToast } from '../../utils/sweetAlert2';

const AuthRegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          dispatch(fetchAuthRegisterRequest(true));
          const userCredential = await signUp(values);
          const { reloadUserInfo } = userCredential.user;
          dispatch(fetchAuthRegisterSuccess(reloadUserInfo));
          actions.setSubmitting(false);
          actions.resetForm();
          localStorage.setItem('user-info', JSON.stringify(reloadUserInfo));
          navigate('/dulceria');
          showToast('success', `Bienvenido ${reloadUserInfo.email}`);
        } catch (error) {
          dispatch(fetchAuthRegisterError(error));
          showToast('error', error.message);
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="auth__form auth__form--grid-cols-2-gap-8"
          >
            <div className="auth__form-input-container">
              <Field name="email" type="text" placeholder="Email" className="auth__form-input" required />
              <ErrorMessage name="email" component="div" className="auth__form-error" />
            </div>
            <div className="auth__form-input-container">
              <Field name="password" type="password" placeholder="Password" className="auth__form-input" required />
              <ErrorMessage name="password" component="div" className="auth__form-error" />
            </div>
            <div className="auth__button-container auth__button-container--col-span-2">
              <button
                type="submit"
                className="auth__secondary-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? <div className="animate-spin"><i className="bi bi-arrow-repeat"></i></div> : <><i className="bi bi-person-circle"></i> Unirme</>}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthRegisterForm;