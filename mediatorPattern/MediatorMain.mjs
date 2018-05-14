import Mediator from './Mediator.mjs'
import Colleague from './Colleague.mjs'

// 成员都在中介中注册，消息通过中介者进行转发

var mediatorA=new Mediator("小明同学")
var ColleagueA=new Colleague("吃瓜群众小张")
var ColleagueB=new Colleague("吃瓜群众红红")

ColleagueA.setMediator(mediatorA)
ColleagueB.setMediator(mediatorA)
mediatorA.segister(ColleagueA)
mediatorA.segister(ColleagueB)


ColleagueA.sendMessage(ColleagueB, "哈喽，我是吃瓜群众小张")