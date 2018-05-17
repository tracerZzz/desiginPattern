import Pen from './Pen.mjs';
/**
 * 晨光笔类
 * 
 * @export
 * @class ChenGuangPen
 */
export default class ChenGuangPen extends Pen{
    constructor(){
        super()
    }
    getType(){
        return "晨光笔"
    }
}