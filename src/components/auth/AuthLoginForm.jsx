import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const AuthLoginForm = () => {
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
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        // actions.resetForm();
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
                className="auth__button-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? <i className="bi bi-arrow-repeat"></i> : <><i className="bi bi-person"></i> Ingresar</>}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthLoginForm;