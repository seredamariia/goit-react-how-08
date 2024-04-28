import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import SearchBox from "../../components/SearchBox/SearchBox";
import style from "./Contacts.module.css";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <section>
        <div className={style.positionSection}>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </section>
    </>
  );
};

export default Contacts;
