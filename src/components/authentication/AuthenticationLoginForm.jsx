import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const AuthenticationLoginForm = () => {
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
            className="authentication__form"
          >
            <div className="authentication__form-input-container">
              <Field name="email" type="text" placeholder="Email" className="authentication__form-input" required />
              <ErrorMessage name="email" component="div" className="authentication__form-error" />
            </div>
            <div className="authentication__form-input-container">
              <Field name="password" type="password" placeholder="Password" className="authentication__form-input" required />
              <ErrorMessage name="password" component="div" className="authentication__form-error" />
            </div>
            <div className="authentication__form-button-container authentication__form-button-container--flex-column">
              <Link
                to="/autenticacion/recuperar-contrasena"
                className="authentication__form-recover-password"
              >
                ¿Olvidaste tu contraseña?
              </Link>
              <button
                type="submit"
                className="authentication__form-button authentication__form-button--login"
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

export default AuthenticationLoginForm;