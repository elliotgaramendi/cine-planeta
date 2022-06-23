import { Field, Form, Formik } from 'formik';

const AuthenticationRegisterForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
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
            <Field name="email" type="text" placeholder="Email" className="authentication__form-input" required />
            <Field name="password" type="password" placeholder="Password" className="authentication__form-input" required />
            <div className="authentication__form-button-container authentication__form-button-container--register">
              <button
                type="submit"
                className="authentication__form-button authentication__form-button--register"
                disabled={isSubmitting}
              >
                {isSubmitting ? <i className="bi bi-arrow-repeat"></i> : <><i className="bi bi-person-circle"></i> Unirme</>}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthenticationRegisterForm;