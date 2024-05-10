import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice/contactsSlice";
// import { selectFilter } from "../../redux/contactsSlice/filterSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice/filterSlice";

const ContactList = () => {

  // const contacts = useSelector(selectContacts);
  // const filterPhrase = useSelector(selectFilter);
  // const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterPhrase.toLowerCase()))

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
        <ul className={css.contactList}>
          {filteredContacts.map((oneContact) => (
              <li key={oneContact.id} className={css.contact}>
                  <Contact key={oneContact.id} data={oneContact}/>
              </li>
          ))}
        </ul>
  )
}

export default ContactList