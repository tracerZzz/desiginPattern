

export default class Colleague{
    constructor(name){
        this.name=name
         
    }
    setMediator(Mediator){
        this.Mediator = Mediator
    }
    sendMessage(who,string){
        console.log(this.name+"说：我想给"+who.name+"发消息,"+"消息是："+string)
        this.Mediator.sendMessage(who, string)
    }
    receivemsg(string){
        console.log(this.name +"说：我收到消息了，消息是"+string)
    }
}