import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
        <li className={styles.contact}>
            <div className={styles['contact-info']}>
                <FaUserAlt className={styles['contact-icon']} />
                <p>{name}</p>
            </div>
            <div className={styles['contact-info']}>
                <FaPhoneAlt className={styles['contact-icon']} />
                <p className={styles['contact-number']}>{number}</p> {}
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
            </button>
        </li>
    );
};

export default Contact;
