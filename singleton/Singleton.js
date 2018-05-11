/**
 * 单例模式
 * @author zzz
 * 
 */


var mySingleton=(function () {
    var instance;
    function init() {
        function privateMethod() {
            console.log('i am privateMethod')
        }
        var privateVariable='i am privateVariable'
        var privateRandomNumbe=Math.random();
        return {
            pullicMethod:function (params) {
                console.log('i am publicMethod')
            },
            publicVariable:"i am publicVariable",
            getRandomNumber:function () {
                return privateRandomNumbe;  
            }
        }
        
    }
    return{
        getInstance:function () {
            if(!instance){
                instance=init()
            }
        return instance
            
        }
    }
    
})();

var singleA = mySingleton.getInstance()
var singleB = mySingleton.getInstance()
// 测试
console.log(singleA.getRandomNumber()===singleB.getRandomNumber())
console.log(singleA===singleB)
singleA.name="zhangsan"
console.log(singleA.name)
console.log(singleB.name)