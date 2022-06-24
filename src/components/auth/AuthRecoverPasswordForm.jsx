import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const AuthRecoverPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={yup.object({
        email: yup.string().email().required('El correo es requerido')
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        actions.resetForm();
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
            <div className="auth__button-container">
              <Link
                to="/autenticacion/login"
                className="auth__primary-button auth__primary-button--outline"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                className="auth__primary-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? <i className="bi bi-arrow-repeat"></i> : <>Recuperar <i className="bi bi-chevron-right"></i></>}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthRecoverPasswordForm;