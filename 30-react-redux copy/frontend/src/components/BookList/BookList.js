import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from '../../redux/slices/filterSlice';
import './BookList.css';



const BookList = () => {
    const dispatch = useDispatch()
    const books = useSelector((state) => state.books)
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
    // books.forEach(element => {
    //     console.log(element.id);
    // });

    console.log(onlyFavoriteFilter);
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))

    }

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id))
    }

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
        const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())
        // if (onlyFavoriteFilter && book.isFavorite === !onlyFavoriteFilter) {
        //     return false
        // }
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
        return matchesTitle && matchesAuthor && matchesFavorite
    })


    const hightLightMAtch = (text, filter) => {
        if (!filter) return text

        const regex = new RegExp(`(${filter})`, 'gi')
        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className='highlight'>
                        {substring}
                    </span>
                )
            }
            return substring
        })
    }




    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">{++i}. {hightLightMAtch(book.title, titleFilter)} by <strong>{hightLightMAtch(book.author, authorFilter)}</strong><div className="book-actions">
                                <span onClick={() => handleToggleFavorite(book.id)}>
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon" />
                                    ) : <BsBookmarkStar className="star-icon" />}
                                    <button onClick={() => handleDeleteBook(book.id)} >Delete</button>
                                </span>
                            </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList