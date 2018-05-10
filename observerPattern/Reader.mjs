import Observer from './Observer.mjs'
export default class Reader extends Observer{
    constructor(name){
        super()
        this.name=name
    }
    Update (book) {
        this.Say("上新书了哎，叫"+book.name)
    }
    Say(content){
        console.log(this.name + "说：" + content)
    }
}