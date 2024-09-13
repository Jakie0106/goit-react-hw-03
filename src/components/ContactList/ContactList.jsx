import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ arr, onDelete }) => {
  return (
    <div>
      <ul className={css.list}>
        {arr.map((item) => {
          return (
            <li key={item.id} className={css.item}>
              <Contact
                onDelete={onDelete}
                name={item.name}
                number={item.number}
                id={item.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
