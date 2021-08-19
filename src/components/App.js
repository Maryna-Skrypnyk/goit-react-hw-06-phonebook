import React from 'react';

// import useLocalStorage from '../hooks/useLocalStorage';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

// import shortid from 'shortid';

import './App.module.scss';

export default function App() {
  // const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   if (contacts.find(contact => contact.number === number)) {
  //     alert(`Number ${number} is already in contacts`);
  //     return;
  //   }

  //   if ((!name || name.trim() === '') && (!number || number.trim() === '')) {
  //     alert('Fill in the fields "Name" and "Number"');
  //     return;
  //   }

  //   if (!name || name.trim() === '') {
  //     alert('Field "Name" is empty');
  //     return;
  //   }

  //   if (!number || number.trim() === '') {
  //     alert('Field "Number" is empty');
  //     return;
  //   }
  //   setContacts(prevContacts => [contact, ...prevContacts]);
  // };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
}
