import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.contactItem}>
        <p className={css.textName}>
          <FaUser className={css.icon} />
          {name}
        </p>

        <a className={css.textName} href={number}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </a>
      </div>
      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
