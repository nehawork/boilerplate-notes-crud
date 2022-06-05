import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AddNote from "../components/add-note";
import { NotesProvider } from "../components/context/note-context";
import ListNotes from "../components/list-notes";
import Note from "../components/types/note";
import styles from "../styles/home-app.module.css";

const Home: NextPage = () => {
  const [isUpdate, setIsUpdate] = useState<Note | undefined>(undefined);

  return (
    <div className={styles.container}>
      <Head>
        <title>Notes App</title>
        <meta
          name="description"
          content="Notes app using nextjs and firebase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Notes App</h1>
        <NotesProvider>
          <div className={styles.notes_wrapper}>
            <AddNote isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
            <ListNotes notesToBeUpdate={isUpdate} onUpdate={setIsUpdate} />
          </div>
        </NotesProvider>
      </main>
    </div>
  );
};

export default Home;
