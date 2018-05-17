import Book from "./Book.mjs"
/**
 * 具体的图书A
 * 
 * @export
 * @class BookA
 */
export default class BookA extends Book{
    constructor(){
        super()
    }
    getTpye(){
        return "A"
    }
}