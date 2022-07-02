import { useEffect } from 'react';
import s from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { phonebookSelector, phonebookOperation } from '../../redux/contacts/phone-book';

export default function ContactList() {
    const contacts = useSelector(phonebookSelector.getFilterContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phonebookOperation.fetchContacts());
    }, [dispatch]);

    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.item}>
                    {name}: {number}
                    <button onClick={() => dispatch(phonebookOperation.deleteContact(id))} type="button" className={s.button}>DELETE</button>

                </li>

            ))}
        </ul>
    );
}
