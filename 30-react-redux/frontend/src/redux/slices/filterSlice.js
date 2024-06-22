import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    author: '',
    publishing: '',
    onlyFavorite: false,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {

        setTitleFilter: (state, action) => {
            // You can mutate state thanks to Immer library
            state.title = action.payload

            // // You can also return new state as usually
            // return {...state, title: action.payload}
        },
        setAuthorFilter: (state, action) => {

            state.author = action.payload
        },
        setPublishingFilter: (state, action) => {

            state.publishing = action.payload
        },
        setOnlyFavoriteFilter: (state) => {
            state.onlyFavorite = !state.onlyFavorite
        },
        resetFilters: () => {
            return initialState
        }
    }
})


export const { setTitleFilter, setAuthorFilter, setPublishingFilter, resetFilters, setOnlyFavoriteFilter } = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectPublishingFilter = (state) => state.filter.publishing
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite


export default filterSlice.reducer