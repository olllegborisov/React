import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/reducer'
import filterReducer from './slices/filterSlice'
<<<<<<< HEAD

=======
>>>>>>> 54299fd945bd3721c349cc1c515b3f5e23e68e62

const store = configureStore({
    reducer: {
        books: booksReducer,
<<<<<<< HEAD
        filter: filterReducer,
=======
        filter: filterReducer
>>>>>>> 54299fd945bd3721c349cc1c515b3f5e23e68e62
    },
});

export default store