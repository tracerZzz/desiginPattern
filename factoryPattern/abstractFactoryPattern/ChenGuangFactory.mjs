
import AbstractFactory from './AbstractFactory.mjs'
import ChenGuangBook from './ChenGuangBook.mjs'
import ChenGuangPen from './ChenGuangPen.mjs'
export default class ChenGuangFactory extends AbstractFactory {
    constructor(){
        super()
    }
    
        // 生产图书
        creeatBook() {
            return new  ChenGuangBook()
        }
        // 生产笔
        creatPen() {
            return new ChenGuangPen()
        }
}