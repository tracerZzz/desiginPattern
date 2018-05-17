
import AbstractFactory from "./AbstractFactory.mjs"
import BookA from "./BookA.mjs"
export default class BookAFactory extends AbstractFactory {
    constructor(){
        super()
    }
    // 实现具体的创建产品方法
    creeatProduct(){
        return new BookA();
    }
}