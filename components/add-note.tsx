import { useState } from "react";
import styles from "../styles/add-note.module.css";
import { useNotes } from "./context/note-context";

const AddNote = (): JSX.Element => {
  const { addNote } = useNotes();

  const [noteText, setNoteText] = useState<string>("");

  const onAddNote = (): void => {
    addNote(noteText).then((resp) => {
      if (resp) setNoteText("");
    });
  };

  return (
    <div className={styles.container}>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        rows={8}
        placeholder="Type text here"
      />
      <button onClick={onAddNote}>Add Note</button>
    </div>
  );
};

export default AddNote;
