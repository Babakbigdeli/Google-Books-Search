import React from 'react';


const Results= (props) =>{

  return(
    <div>
      {props.data.map((savedBooks)=>{
        return(
          <div key={savedBooks._id}>
            <div>
            <div className='card'>
            <div className='card-image'>
                <img src={savedBooks.image} alt={savedBooks.title} />
                </div>
                <p>{savedBooks.title}</p>
                <p>by: {savedBooks.authors}</p>
                <div className='description'>{savedBooks.description}</div>
                <div>
                  <button type='button' className='buttons' id={savedBooks.id} onClick={() => props.deleteBook(savedBooks._id)}> Delete</button>
                </div>
                <div>
                  <a href={savedBooks.link} rel="noopener noreferrer" target='_blank'>
                    <button type='button' className='buttons'>Google Book</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
       <div>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <div className='card'>
              <div className='card-image'>
                <img src={book.image} alt={book.title} />
              </div>
              <p>{book.title}</p>
              <p>by: {book.authors}</p>
              <div className='content'>{book.description}</div>
              <div>
                <button
                  type='button'
                  className='resultsbutton'
                  id={book.id}
                  onClick={event => props.saveBooks(event)}>
                  Save
                </button>
                <a href={book.link} rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='resultsbutton'>
                    More info
                  </button>
                </a>
                <a rel='noopener noreferrer' target='_blank'>
                  <button type='button' className='resultsbutton'>
                    I've read this book!
                  </button>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </div>
    

  )
}

export default Results