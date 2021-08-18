import actionTypes from '../redux/contacts/contacts-types';

export const contactAdd = value => ({
  type: actionTypes.CONTACTS_ADD,
  payload: value,
});

export const contactRemove = value => ({
  type: actionTypes.CONTACT_DELETE,
  payload: value,
});
