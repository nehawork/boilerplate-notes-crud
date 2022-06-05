import styles from "../styles/note.module.css";
import { useNotes } from "./context/note-context";
import Note from "./types/note";

const DisplayNote = ({
  note,
  isUpdatingNote,
  onUpdate,
}: {
  note: Note;
  isUpdatingNote: boolean;
  onUpdate(note: Note | undefined): void;
}): JSX.Element => {
  const { deleteNote } = useNotes();

  return (
    <div
      className={
        styles.container + " " + (isUpdatingNote ? styles.highlight : "")
      }
    >
      <span>{note.text}</span>
      <button disabled={isUpdatingNote} onClick={() => onUpdate(note)}>
        Update
      </button>
      <button disabled={isUpdatingNote} onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default DisplayNote;
