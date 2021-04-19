import React, { Component } from "react";
import API from "../utils/API";
import SavedResults from "../components/SavedResults";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks() {
    API.getBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  deleteBook = (id) => {
    API.deleteBook(id)
      .then(() => this.getSavedBooks())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <h2>Saved books</h2>
        <SavedResults
          books={this.state.savedBooks}
          deleteBook={this.deleteBook}
        />
      </div>
    );
  }
}

export default Saved;
