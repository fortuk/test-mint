import React from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from 'components/Container/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const PhonebookPage = () => {
  return (
    <>
      <Container>
        <Form />
      </Container>
      <Container>
        <Filter />
      </Container>
      <Container>
        <ContactsList />
      </Container>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default PhonebookPage;
