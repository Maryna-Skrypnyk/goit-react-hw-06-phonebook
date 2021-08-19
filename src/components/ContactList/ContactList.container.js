import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const getVisibleContactsSortByName = (allContacts, filter) => {
  const visibleContacts = getVisibleContacts(allContacts, filter);

  const visibleContactsSortByName = visibleContacts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return visibleContactsSortByName;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContactsSortByName(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
