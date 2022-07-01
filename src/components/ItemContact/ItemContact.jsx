import React from 'react';
import { useDispatch } from 'react-redux';
import s from './ItemContact.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/auth/authApi';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { resetFilter } from 'redux/phonebook/phonebook-reducer';
import Button from 'components/Button/Button';

const ItemContact = ({ contact }) => {
  const dispatch = useDispatch();
  const onResetFilter = () => dispatch(resetFilter());
  const [
    deleteContact,
    { isLoading: isLoadingBtn },
  ] = useDeleteContactMutation();

  const onDeleteContact = e => {
    deleteContact(e.target.id);
    toast.warn(`Contact ${contact.name} deleted`);

    onResetFilter();
  };
  return (
    <li className={s.item} id={contact.id}>
      <p className={s.text}>
        {contact.name}: {contact.number}
      </p>
      <Button
        isActive={!isLoadingBtn}
        title="Delete"
        onClick={onDeleteContact}
        id={contact.id}
      />
      <ToastContainer autoClose={2000} />
    </li>
  );
};
ItemContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default ItemContact;
