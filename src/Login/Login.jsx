import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { routes } from 'utils/routes';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const Login = () => {
  const validate = useCallback(values => {
    const errors = {};

    //валидация для email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }, []);

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }, []);

  return (
    <div>
      <h1>Login form</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            {errors.email && touched.email && errors.email}
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <br />
            <br />
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !(
                  Object.keys(errors).length === 0 &&
                  Object.keys(touched).length ===
                    Object.keys(INITIAL_VALUES).length
                )
              }
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      {/* <Link to='/register'> */}
      <Link to={routes.register}>
        Doesn't have any account? Please, register!
      </Link>
    </div>
  );
};

export default Login;
