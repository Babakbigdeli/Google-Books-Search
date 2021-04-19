import React from "react";

const SavedResults = (props) => {
  return (
    <div>
      {props.books.map((savedBooks) => {
        return (
          <div key={savedBooks._id}>
            <div>
              <div className="card">
                <div className="card-image">
                  <img src={savedBooks.image} alt={savedBooks.title} />
                </div>
                <p>{savedBooks.title}</p>
                <p>by: {savedBooks.authors}</p>
                <div className="description">{savedBooks.description}</div>
                <div>
                  <button
                    type="button"
                    className="buttons"
                    id={savedBooks.id}
                    onClick={() => props.deleteBook(savedBooks._id)}
                  >
                    {" "}
                    Delete
                  </button>
                </div>
                <div>
                  <a
                    href={savedBooks.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button type="button" className="buttons">
                      Google Book
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SavedResults;
