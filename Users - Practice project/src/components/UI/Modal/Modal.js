import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import Card from "../Card/Card";

const Modal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.close}>
      <Card className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.content}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.close}>Alright</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
