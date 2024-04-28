import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {filteredContacts.length > 0 && (
        <ul className={css.contactsList}>
          {filteredContacts.map((contact) => (
            <li className={css.contactItem} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
