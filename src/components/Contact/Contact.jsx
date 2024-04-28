import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectIsDeletingContact } from "../../redux/contacts/selectors";
import { CircularProgress } from "@mui/material";

const Contact = ({ data: { id, number, name } }) => {
  const dispatch = useDispatch();

  const isDeleteContact = useSelector(selectIsDeletingContact) === id;
  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.container}>
        <div>
          <h3>{name}</h3>
          <p>{number}</p>
        </div>
        <button className={css.button} onClick={handleDeleteItem}>
          {isDeleteContact ? <CircularProgress /> : <>Delete</>}
        </button>
      </div>
    </>
  );
};

export default Contact;
