import Note from "./note";

type NoteContextType = {
  notes: Array<Note>;
  addNote(text: string): Promise<boolean>;
  updateNote(note: Note): Promise<boolean>;
  deleteNote(id: number): void;
};

export default NoteContextType;