import React from 'react';
// import { connect } from 'react-redux';
// import contactsActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import { ReactComponent as IconDelete } from '../icons/icon-close-delete.svg';

import styles from './ContactList.module.scss';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <li className={styles.ContactItem}>
    <p className={styles.Contact}>
      <span className={styles.ContactName}>{name}:</span> {number}
    </p>
    <IconButton onDeleteContact={onDeleteContact} aria-label="Delete contact">
      <IconDelete width={15} height={15} />
    </IconButton>
  </li>
);

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) {
    return <p>There are no contacts in the list</p>;
  }

  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const getVisibleContactsSortByName = (allContacts, filter) => {
//   const visibleContacts = getVisibleContacts(allContacts, filter);

//   const visibleContactsSortByName = visibleContacts.sort((a, b) => {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   });

//   return visibleContactsSortByName;
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContactsSortByName(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
