// export const contactAdd = value => ({
//   type: 'contact/Add',
//   payload: value,
// });

// export const contactRemove = value => ({
//   type: 'contact/Remove',
//   payload: value,
// });
import shortid from 'shortid';
import actionTypes from './contacts-types';

const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
