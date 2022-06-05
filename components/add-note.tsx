import { useEffect, useState } from "react";
import styles from "../styles/add-note.module.css";
import { useNotes } from "./context/note-context";
import Note from "./types/note";

type Props = {
  isUpdate?: Note;
  setIsUpdate(note?: Note): void;
};

const AddNote = ({ isUpdate, setIsUpdate }: Props): JSX.Element => {
  const { addNote, updateNote } = useNotes();

  const [noteText, setNoteText] = useState<string>("");

  const onAddNote = (): void => {
    if (isUpdate && isUpdate.id) {
      updateNote({ id: isUpdate.id, text: noteText }).then((resp) => {
        if (resp) {
          setIsUpdate(undefined);
          setNoteText("");
        }
      });
    } else {
      addNote(noteText).then((resp) => {
        if (resp) setNoteText("");
      });
    }
  };

  useEffect(() => {
    if (isUpdate && isUpdate.id) {
      setNoteText(isUpdate.text);
    }
  }, [isUpdate]);

  return (
    <div className={styles.container}>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        rows={8}
        placeholder="Type text here"
      />
      <div className={styles.buttons_wrapper}>
        <button onClick={onAddNote}>
          {isUpdate && isUpdate.id ? "Update" : "Add"} Note
        </button>
        {isUpdate && isUpdate.id && (
          <button
            onClick={() => {
              setIsUpdate(undefined);
              setNoteText("");
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default AddNote;
