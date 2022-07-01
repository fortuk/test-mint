import React, { useReducer, useEffect } from 'react';
import s from './Form.module.css';
import shortid from 'shortid';

import {
  useAddContactMutation,
  useLazyFetchContactsQuery,
  useFetchContactsQuery,
} from 'redux/auth/authApi';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Button from 'components/Button/Button';

const initialState = {
  name: '',
  number: '',
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'number':
      return { ...state, number: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();

  const [addContact, { isLoading, isError }] = useAddContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    dispatch({ type: 'reset' });
  };

  const {
    fetchContacts,
    data: contacts,
    error: errorFetch,
    isError: isErrorFetch,
    isLoading: isLoadingFetch,
    isFetching,
  } = useFetchContactsQuery();

  // useEffect(() => {
  //   fetchContacts().unwrap();
  // }, [fetchContacts]);

  const onSubmit = async state => {
    const normalizedName = state.name
      .toLocaleLowerCase()
      .split(' ')
      .join('');
    const ableToAddName = contacts?.some(
      contact =>
        contact.name
          .toLocaleLowerCase()
          .split(' ')
          .join('') === normalizedName
    );
    const normalizedNumber = state.number.split('-').join('');
    const ableToAddNumber = contacts?.some(
      contact => contact.number.split('-').join('') === normalizedNumber
    );
    if (ableToAddName || ableToAddNumber) {
      toast.error(
        `${ableToAddName ? state.name : state.number} is already in contacts`
      );
      return;
    }
    try {
      await addContact(state);
    } catch (error) {
      console.log(error);
      toast.error(
        `Something went wrong while adding a contact, try changing the name or number.`
      );
    }
  };

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <form onSubmit={handleSubmit} className={s.wrapper}>
        <label htmlFor={nameInputId} className={s.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleChange}
          id={nameInputId}
          className={s.input}
        />
        <label htmlFor={phoneInputId} className={s.label}>
          Phone number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={handleChange}
          id={phoneInputId}
          className={s.input}
        />
        <div className={s.btn__wrapper}>
          <Button title="Add contact" type="submit" />
        </div>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Form;
