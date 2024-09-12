// src/components/App/App.jsx
import { useState, useEffect } from 'react';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import { nanoid } from 'nanoid';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (savedContacts) {
            setContacts(savedContacts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = ({ name, number }) => {
        const newContact = { id: nanoid(), name, number };
        setContacts((prevContacts) => [newContact, ...prevContacts]);
    };

    const deleteContact = (contactId) => {
        setContacts((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== contactId)
        );
    };

    const changeFilter = (e) => {
        setFilter(e.target.value);
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const visibleContacts = getVisibleContacts();

    return (
        <div className="app">
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <SearchBox value={filter} onChange={changeFilter} />
            <ContactList
                contacts={visibleContacts}
                onDeleteContact={deleteContact}
            />
        </div>
    );
};

export default App;
