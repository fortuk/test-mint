import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';

import s from './ContactsList.module.css';
import { useFetchContactsQuery } from 'redux/auth/authApi';

import ItemContact from 'components/ItemContact/ItemContact';
import Loader from 'components/Loader/Loader';
import { getIsLogged } from 'redux/auth/token-selectors';

const ContactsList = () => {
  const isLogged = useSelector(getIsLogged);
  const {
    data,
    error,
    isError,
    isLoading,
    isFetching,
  } = useFetchContactsQuery(null, { skip: !isLogged });

  const contacts = useSelector(state => getVisibleContacts(state, data));

  const shouContacts = contacts?.length === 0 || error?.status === 404;

  return (
    <>
      {isLoading && <Loader />}
      {isError && error?.status !== 404 && <p>Somthing wrong</p>}
      {shouContacts ? (
        <p>There are no contacts in the phonebook</p>
      ) : (
        <ul className={s.list}>
          {contacts?.length > 0
            ? contacts.map(contact => (
                <ItemContact key={contact.id} contact={contact} />
              ))
            : ''}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
