import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalToggleHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={modalToggleHandler}>Open Form</button>
      {modalIsOpen && <Modal onFormSubmit={setModalIsOpen} />}
    </div>
  );
}

export default App;
