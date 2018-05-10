
import Subject from './Subject.mjs'


/**
 * 图书馆类
 * 作为观察目标，继承自Subject类
 * @class Lib
 * @extends {Subject}
 */
export default class Lib extends Subject{
    constructor(){
        super()
        this.books=[]
    }
    AddBook(book){
        this.books.push(book)
        // 图书馆上新了，通知图书馆的读者
        super.Notify(book)
    }

}