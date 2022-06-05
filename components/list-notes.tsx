import DisplayNote from "./note";
import styles from "../styles/list-notes.module.css";
import { useNotes } from "./context/note-context";
import Note from "./types/note";

const ListNotes = ({
    notesToBeUpdate,
  onUpdate,
}: {
    notesToBeUpdate?: Note;
  onUpdate(note: Note | undefined): void;
}): JSX.Element => {
  const { notes } = useNotes();

  return (
    <div className={styles.container}>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <DisplayNote isUpdatingNote={notesToBeUpdate ? notesToBeUpdate.id === note.id : false} note={note} onUpdate={onUpdate} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListNotes;
