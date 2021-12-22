import { useState } from "react";
import { useDispatch } from "react-redux";
import actionsOperations from "../../redux/phonebook/phonebook-operations";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const onAdd = () =>
    dispatch(actionsOperations.addContactsOperation({ name, phone }));

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd();

    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>Имя</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label>Телефон</label>
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button type="submit" className="form_add-button">
        Add contact
      </button>
    </form>
  );
};
export default Form;
