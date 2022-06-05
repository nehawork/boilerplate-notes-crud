import DisplayNote from "./note";
import styles from "../styles/list-notes.module.css";
import { useState } from "react";
import Note from "./types/note";
import { useNotes } from "./context/note-context";

const ListNotes = (): JSX.Element => {
  const {notes} = useNotes();

  return (
    <div className={styles.container}>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <DisplayNote note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListNotes;
