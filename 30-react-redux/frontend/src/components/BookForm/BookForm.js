import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addBook } from '../../redux/slices/booksSlice'
import createBookWithID from '../../utils/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]
        dispatch(addBook(createBookWithID(randomBook)))
    }
    // consst [formData, setFormData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && author) {
            // const book = {
            //     title: title,
            //     author: author,
            //     id: uuidv4()
            // }
            dispatch(addBook(createBookWithID({ title, author })))
            setTitle('')
            setAuthor('')
        }
    }

    const handleAddRandomBookViaAPI = async () => {
        try {
            const res = await axios.get('http://localhost:4000/random-book')
            if (res?.data?.title && res?.data?.author) {
                dispatch(addBook(createBookWithID(res.data)))
            }
        } catch (error) {
            console.log('Error fetching random book', error);
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
                <button type="button" onClick={handleAddRandomBook}>Add Random</button>
                <button type="button" onClick={handleAddRandomBookViaAPI}> Add Random via API</button>
            </form>
        </div>
    )
}

export default BookForm