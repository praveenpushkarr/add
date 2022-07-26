import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
export default App;

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} body={note.content} />
      ))}
      <Footer />
    </div>
  );
}
