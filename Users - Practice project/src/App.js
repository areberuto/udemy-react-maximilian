import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});
  const [displayModal, setDisplayModal] = useState(false);

  const handleAddUser = (age, name) => {
    const newUser = {
      id: Math.random(),
      age: age,
      name: name,
    };
    setUsers((users) => {
      return [...users, newUser];
    });
  };

  const raiseModal = (title, msg) => {
    setDisplayModal(true);
    setError({ title: title, message: msg });
  };

  const onCloseModal = () => {
    setDisplayModal(false);
  };

  let content;

  if (users.length) {
    content = <UserList users={users} />;
  } else {
    content = <p className="pp-no-users">No users registered.</p>;
  }
  return (
    <div>
      <AddUser onAddUser={handleAddUser} onError={raiseModal} />
      {content}
      {displayModal && (
        <Modal
          title={error.title}
          content={error.message}
          close={onCloseModal}
        />
      )}
    </div>
  );
}

export default App;
