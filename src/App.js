import { useState } from "react";
import FillDetailsForm from "./FormDetails";
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
      {modalIsOpen && <FillDetailsForm onFormSubmit={setModalIsOpen} />}
    </div>
  );
}

export default App;
