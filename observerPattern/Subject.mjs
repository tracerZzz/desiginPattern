import ObserverList from "./ObserverList.mjs";

export default class Subject{
    constructor(){
        this.observers=new ObserverList()
    }
    AddObserver(obj){
        this.observers.Add(obj)
    }
    RemoveObserver(obj){
        let index = this.observers.IndexOf(obj)
        if (index!=-1){
            this.observers.RemoveIndexAt(index)
        }
    }
    Notify(context){
        let count =this.observers.Count()
        for(var i=0;i<count;i++){
            this.observers.Get(i).Update(context)
        }
    }
}