import styles from "./UserList.module.scss";

const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
