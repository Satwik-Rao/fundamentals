import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Book from "./book";
import book_array from "../utility/book_array";

function Booklist() {
  return (
    <>
      <h1 className="bestsellers">Amazon Bestsellers</h1>
      <div className="booklist">
        {book_array.map((item, index) => {
          return <Book {...item} key={item.id} index={index} />;
        })}
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Booklist />);
