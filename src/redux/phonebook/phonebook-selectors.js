export const getFilterContact = state => state.filterContact;

// Для компонента ContactList сложный селектор
export const getVisibleContacts = (state, contacts) => {
  if (!contacts) {
    return [];
  }
  const filterContact = getFilterContact(state);
  if (!filterContact) {
    return contacts;
  }
  const normWord = filterContact.toLocaleLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normWord)
  );
};
