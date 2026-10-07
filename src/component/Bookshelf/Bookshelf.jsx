import { useState } from "react";

function Bookshelf() {
  const [books, setBooks] = useState([]);

  const [titles, setTitles] = useState("");

  const [authors, setAuthers] = useState("");

  function handletitlesInputChange() {
    setTitles(event.target.value);
  }

  function handleAuthorInputChange() {
    setAuthers(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newBook = {
      titles: titles,
      authors: authors,
    };
    setBooks([...books, newBook]);
    setAuthers("");
    setTitles("");
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="titles">Title :</label>
          <br></br>

          <input
            value={titles}
            onChange={handletitlesInputChange}
            id="titles"
            type="text"
          />
          <br></br>
          <label htmlFor="authers">author: </label>
          <br></br>

          <input
            value={authors}
            onChange={handleAuthorInputChange}
            id="authers"
            type="text"
          />
          <br></br>
          <button>Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((oneBook) => (
          <div className="bookCard ">
            <p>{oneBook.titles}</p>
            <p>by {oneBook.authors}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
