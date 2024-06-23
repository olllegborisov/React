import { v4 as uuidv4 } from 'uuid'

const createBookWithID = (book, source) => {
    console.log(book.source);
    return {
        ...book,
        source,
        isFavorite: false,
        id: uuidv4()
    }
}

export default createBookWithID