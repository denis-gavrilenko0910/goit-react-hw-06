import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import styles from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const visibleContacts = getVisibleContacts();
    return (
        <ul className={styles.contactList}>
            {visibleContacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    );
};

export default ContactList;
