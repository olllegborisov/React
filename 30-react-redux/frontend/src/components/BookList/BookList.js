import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteBook } from '../../redux/books/actionCreators';
import './BookList.css';



const BookList = () => {
    const dispatch = useDispatch()
    const books = useSelector((state) => state.books)
    // books.forEach(element => {
    //     console.log(element.id);
    // });

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))

    }

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">{++i}. {book.title} by <strong>{book.author}</strong><div className="book-actions"><button onClick={() => handleDeleteBook(book.id)} >Delete</button></div></div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList