import type { NextPage } from "next";
import Head from "next/head";
import AddNote from "../components/add-note";
import { NotesProvider } from "../components/context/note-context";
import ListNotes from "../components/list-notes";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
          <div>
            <AddNote />
            <ListNotes />
          </div>
        </NotesProvider>
      </main>
    </div>
  );
};

export default Home;
