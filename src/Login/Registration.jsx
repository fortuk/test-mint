import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { routes } from 'utils/routes';
import { authOperations } from '../redux/auth/auth-operations';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = useCallback(values => {
    const errors = {};
    //валидация для name
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Invalid name. Name must be more than 3 letter';
    }
    //валидация для email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    //валидация для password
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 7 || values.password.length > 15) {
      errors.password =
        'Invalid password. Password must be more than 7 symbols and less than 15 symbols';
    }

    //валидация для confirm password
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (
      values.confirmPassword.length < 7 ||
      values.confirmPassword.length > 15
    ) {
      errors.confirmPassword =
        'Invalid password. Password must be more than 7 symbols and less than 15 symbols';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword =
        'Password does not match. Confirm password should be equal to password';
    }
    return errors;
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(authOperations.register({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // }

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');

      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    [dispatch, email, name, password],
  );

  return (
    <div>
      <h1>Ragistration form</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <label htmlFor="name">Name: </label>
            <Field type="text" name="name" placeholder="Enter name..." />

            <ErrorMessage name="name" component="div" />
            <br />
            <br />
            <label htmlFor="email">Email: </label>
            <Field type="email" name="email" placeholder="Enter email..." />
            <ErrorMessage name="email" component="div" />
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <Field type="password" name="password" placeholder="********" />
            <ErrorMessage name="password" component="div" />
            <br />
            <br />
            <label htmlFor="password">Confirm passwords: </label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="********"
            />
            <ErrorMessage name="confirmPassword" component="div" />
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
          </Form>
        )}
      </Formik>
      {/* <Link to="/login"> */}
      <Link to={routes.login}>Do you have any account? Login!</Link>
    </div>
  );
};

export default Registration;
