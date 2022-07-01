import s from './App.module.css';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList/index'
import Filter from './components/Filter'
import Layout from './components/Layout/Layout';


export default function App() {
    return (
        <Layout>
            <div className={s.section}>
                <h1>Phonebook</h1>
                <ContactForm />
                <h2>Contacts</h2>
                <Filter />
                <ContactList />
            </div>
        </Layout>
    );
}