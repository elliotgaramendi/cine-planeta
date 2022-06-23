import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const AuthenticationRecoverPasswordForm = () => {
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
            <div className="authentication__form-button-container">
              <Link
                to="/autenticacion/login"
                className="authentication__form-button-primary authentication__form-button-primary--outline"
              >
                Cancelar
              </Link>
              <button
                className="authentication__form-button-primary"
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

export default AuthenticationRecoverPasswordForm;