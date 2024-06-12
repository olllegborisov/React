import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const booksSlice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
        addBook: (state, action) => {
            return [...state, action.payload]
        },
        deleteBook: (state, action) => {
            return state.filter(book => book.id !== action.payload);
        },
        toggleFavorite: (state, action) => {
            return state.map((book) =>
                book.id === action.payload
                    ? { ...book, isFavorite: !book.isFavorite }
                    : book
            )
        }

    }
})
console.log(booksSlice);

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions


export default booksSlice.reducer