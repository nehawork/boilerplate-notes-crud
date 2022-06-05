import React, { useContext, useState } from "react";
import Note from "../types/note";
import NoteContextType from "../types/note-context-type";

const NotesContext = React.createContext<NoteContextType>({
  notes: [],
  addNote: () => Promise.reject("should not happen"),
  deleteNote: () => Promise.reject("should not happen"),
});

const NotesProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const value = useNotesProvider();
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

const useNotes = (): NoteContextType => {
  return useContext(NotesContext);
};

const useNotesProvider = (): NoteContextType => {
  const [notes, setNotes] = useState<Array<Note>>([]);

  const deleteNote = (id: number) => {
    const deleteIndex = notes.findIndex((e) => e.id === id);
    if (deleteIndex !== -1) {
      notes.splice(deleteIndex, 1);
      setNotes([...notes]);
    }
  };

  const addNote = (text: string): Promise<boolean> => {
    if (text.trim() === "") {
      alert("Add some text to save!");
    } else {
      setNotes([{ id: notes.length + 1, text }, ...notes]);
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  };

  return {
    notes,
    addNote,
    deleteNote,
  };
};

export { NotesProvider, useNotes };
