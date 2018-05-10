
/**
 * 
 * 观察者list
 * @export
 * @class ObserverList
 */
export default class ObserverList{
    constructor(){
        this.ObserverList = [];
    }
    Add(obj){
        return this.ObserverList.push(obj)
    }
    Empty(){
        return this.ObserverList=[]
    }
    Count(){
        return this.ObserverList.length
    }
    Get(index){
        if(index>-1 && index < this.ObserverList.length){
            return this.ObserverList[index]
        }
    }
    RemoveIndexAt(index){
        if (index===0) {
            this.ObserverList.shift()            
        }
        if(index===this.ObserverList.length-1){
            this.ObserverList.pop()
        }else{
            this.ObserverList.splice(index,1)
        }
    }
    IndexOf(obj){
        let startIndex,pointer;
        startIndex=0;
        pointer=-1
        while(startIndex<this.ObserverList.length){
            if(this.ObserverList[startIndex]===obj){
                pointer= startIndex
            }
            startIndex++
        }
        return pointer
    }
    
}