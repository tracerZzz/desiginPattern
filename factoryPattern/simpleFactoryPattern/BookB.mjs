import Book from "./Book.mjs"

/**
 * 具体的图书B
 * 
 * @export
 * @class BookB
 * @extends {Book}
 */
export default class BookB extends Book{
    constructor(){
        super()
    }
    getType(){
        return "B"
    }
}