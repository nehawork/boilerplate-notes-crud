import styles from "../styles/note.module.css";
import { useNotes } from "./context/note-context";
import Note from "./types/note";

const DisplayNote = ({ note }: { note: Note }): JSX.Element => {
  const { deleteNote } = useNotes();

  return (
    <div className={styles.container}>
      {note.text}
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default DisplayNote;
