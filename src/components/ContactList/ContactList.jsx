import React from 'react';
import { connect } from 'react-redux';

import phoneOperations from '../../redux/phoneOperations';
import phoneSelectors from '../../redux/phoneSelectors';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.name}>{name}</p>
          <p className={s.tel}>{number}</p>
          <button className={s.btnDel} onClick={() => onDeleteContacts(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: phoneSelectors.getVisisbleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(phoneOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
