import Book from "./Book.mjs"
/**
 * 晨光书
 * 
 * @export
 * @class BookA
 */
export default class ChenGuangBook extends Book{
    constructor(){
        super()
    }
    getType(){
        return "晨光书"
    }
}