import { useState } from "react";
import { sendMessageToTelegram } from "../../utils";
import Portal from "../Portal";

const CallbackForm = ({ isOpen, setIsOpen }) => {
  const [message, setMessage] = useState({
    name: "",
    phone: "",
  });

  const submit = () => {
    const { name, phone } = message;
    sendMessageToTelegram({ name, phone });
    setIsOpen(false);
  };

  const onHandleInput = ({ target: { value, name } }) => {
    setMessage((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  return (
    <>
      <Portal open={isOpen} onClose={() => setIsOpen(false)}>
        <div>This is Form</div>
        <label>
          Name:
          <input
            name="name"
            onChange={onHandleInput}
            placeholder="add please your name"
            type="text"
            value={message.name}
          />
        </label>
        <label>
          Phone:
          <input
            name="phone"
            onChange={onHandleInput}
            placeholder="add please your number"
            type="number"
            value={message.phone}
          />
        </label>
        <button onClick={submit}>send Message</button>
      </Portal>
    </>
  );
};

export default CallbackForm;
