import { v4 as uuidv4 } from 'uuid'

const createBookWithID = (book, source) => {
    console.log(book.source);
    return {
        ...book,
        source,
        isFavorite: false,
        publishing: 'Not found',
        id: uuidv4()
    }
}

export default createBookWithID