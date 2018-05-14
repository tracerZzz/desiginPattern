/**
 * 中介者基类
 * 
 * @class Mediator
 */
export default class Mediator{
    constructor(name){
        this.Colleagues=[]
        this.name=name
    }
    
    sendMessage(who,string){
        for(var i=0;i<this.Colleagues.length;i++){
            if(this.Colleagues[i]===who){
                console.log("中介者" + this.name + ":消息已转发给" + this.Colleagues[i].name)
                this.Colleagues[i].receivemsg(string)
                
            }
        }
    }
    // 注册参与者
    segister(Colleague){
        this.Colleagues.push(Colleague)
    }
    
}