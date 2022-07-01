import axios from 'axios';
import shortid from 'shortid';
import phoneActions from './phoneActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//fetchContacts - операция, она использует синхронные медоты phoneActions по http запросу.
//до, успех и ошибка
//-----------------fetchContacts---------------------------
const fetchContacts = () => async dispatch => {
  dispatch(phoneActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(phoneActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phoneActions.fetchContactsError(error.massage));
  }
};

//-----------------addContact---------------------------
const addContact = contactData => dispatch => {
  const contact = {
    id: shortid.generate(),
    ...contactData,
    completed: false,
  };

  dispatch(phoneActions.addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(phoneActions.addContactsSuccess(data)))
    .catch(error => dispatch(phoneActions.addContactsError(error.massage)));
};

//-----------------deleteContacts---------------------------
const deleteContacts = contactId => dispatch => {
  dispatch(phoneActions.deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(phoneActions.deleteContactsSuccess(contactId)))
    .catch(error => dispatch(phoneActions.deleteContactsError(error.massage)));
};

const phoneOperations = { fetchContacts, addContact, deleteContacts };
export default phoneOperations;
