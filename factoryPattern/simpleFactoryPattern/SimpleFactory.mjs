import BookA from './BookA.mjs'
import BookB from './BookB.mjs'
/**
 * 图书工厂
 * 
 * @export
 * @class Factory
 */
export default class SimpleFactory{
    constructor(){

    }
    createBook(bookType){
        if (bookType==="A"){
            return new BookA()
        }else{
            return new BookB()
        }
    }
}