import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContactsSortByName } from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-actions';

// import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './ContactForm.module.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getVisibleContactsSortByName);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

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

    const { name, number } = e.target;

    if (contacts.find(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    if (contacts.find(contact => contact.number === number.value)) {
      alert(`Number ${number.value} is already in contacts`);
      return;
    }

    if ((!name || name.trim() === '') && (!number || number.trim() === '')) {
      alert('Fill in the fields "Name" and "Number"');
      return;
    }

    if (!name || name.trim() === '') {
      alert('Field "Name" is empty');
      return;
    }

    if (!number || number.trim() === '') {
      alert('Field "Number" is empty');
      return;
    }

    dispatch(contactsActions.addContact(name, number));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <label htmlFor={nameInputId} className={styles.Label}>
        <span className={styles.LabelText}>Name</span>
        <input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          // required
          maxLength="40"
          className={styles.Input}
        />
      </label>

      <label htmlFor={numberInputId} className={styles.Label}>
        <span className={styles.LabelText}>Number</span>
        <input
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          // required
          maxLength="18"
          className={styles.Input}
        />
      </label>

      <button type="submit" className={styles.Button}>
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;
