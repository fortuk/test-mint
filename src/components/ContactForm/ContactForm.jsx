
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookSelector, phonebookOperation } from '../../redux/contacts/phone-book';
import s from '../ContactForm/ContactForm.module.css'



export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(phonebookSelector.getContacts);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number === number)) {
            alert(`${number} is already in contacts.`);
        } else if (!name.trim() || !number.trim()) {
            alert("Enter the contact's name and number phone!");
        } else {
            dispatch(phonebookOperation.addContact({ name, number }));
            setName('');
            setNumber('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
                Name
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={s.label}>
                Phone Number
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit" className={s.button}>
                Add Contact
            </button>
        </form>
    );
}