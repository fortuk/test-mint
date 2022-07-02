import React from 'react';
import s from './Filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { phonebookAction, phonebookSelector } from '../../redux/contacts/phone-book';

export default function Filter() {
    const filter = useSelector(phonebookSelector.getFilter);
    const dispatch = useDispatch();
    return (
        <label className={s.label}>
            <input type="text" value={filter} onChange={e => dispatch(phonebookAction.changeFilter(e.target.value))} className={s.input} />
        </label>
    );
}
