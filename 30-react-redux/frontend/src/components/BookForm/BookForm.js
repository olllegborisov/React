import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/books/actionCreators'
import { v4 as uuidv4 } from 'uuid'
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()
    // consst [formData, setFormData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && author) {
            const book = {
                title,
                author,
                id: uuidv4()
            }
            dispatch(addBook(book))
            setTitle('')
            setAuthor('')
        }
    }

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default BookForm