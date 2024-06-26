<<<<<<< HEAD
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import createBookWithID from "../../utils/createBookWithID"
import { setError } from "./errorSlice"
=======
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createBookWithID from '../../utils/createBookWithID';
import { setError } from './errorSlice';
>>>>>>> b39ca0c8ab2007cf37f91b1ef0d94238940008b2

const initialState = {
    books: [],
    isLoadingViaAPI: false,
};

export const fetchBook = createAsyncThunk(
    'books/fetchBook',
    async (url, thunkAPI) => {
        try {
<<<<<<< HEAD
            const res = await axios.get(url)
            return res.data

        } catch (error) {
            thunkAPI.dispatch(setError(error.message))
            throw error
=======
            const res = await axios.get(url);
            console.log(res.data);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.message));
            // OPTION 1
            return thunkAPI.rejectWithValue(error);
            // // OPTION 2
            // throw error
>>>>>>> b39ca0c8ab2007cf37f91b1ef0d94238940008b2
        }
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
            };
        },
        toggleFavorite: (state, action) => {
            state.books.forEach((book) => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            });
        },
    },
<<<<<<< HEAD

    // OPTION  1
    // extraReducers: {
    //     [fetchBook.fulfilled]: (state, action) => {
    //         if (action.payload.title && action.payload.author) {
    //             state.push(createBookWithID(action.payload, 'API'))
    //         }
    //     }
    // }
    // OPTION  2
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) {
                state.push(createBookWithID(action.payload, 'API'))
=======
    // OPTION 1
    extraReducers: {
        [fetchBook.pending]: (state) => {
            state.isLoadingViaAPI = true;
        },
        [fetchBook.fulfilled]: (state, action) => {
            state.isLoadingViaAPI = false;
            if (action?.payload?.title && action?.payload?.author) {
                state.books.push(createBookWithID(action.payload, 'API'));
>>>>>>> b39ca0c8ab2007cf37f91b1ef0d94238940008b2
            }
        },
        [fetchBook.rejected]: (state) => {
            state.isLoadingViaAPI = false;
        },
    },
    // // OPTION 2
    // extraReducers: (builder) => {
    //     builder.addCase(fetchBook.pending, (state) => {
    //         state.isLoadingViaAPI = true;
    //     });
    //     builder.addCase(fetchBook.fulfilled, (state, action) => {
    //         state.isLoadingViaAPI = false;
    //         if (action.payload.title && action.payload.author) {
    //             state.books.push(createBookWithID(action.payload, 'API'));
    //         }
    //     });
    //     builder.addCase(fetchBook.rejected, (state) => {
    //         state.isLoadingViaAPI = false;
    //     });
    // },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI;

export default booksSlice.reducer;
