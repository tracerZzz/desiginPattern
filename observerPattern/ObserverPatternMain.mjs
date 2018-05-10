import Subject from './Subject.mjs'
import ObserverList from './ObserverList.mjs'
import Lib from './Lib.mjs'
import Reader from './Reader.mjs'
import Book from './Book.mjs '

// 新建一个图书馆
var lib =new Lib();
// 有两个读者
var zhangsan=new Reader("张三")
var lisi=new Reader("李四")
// 两个读者都订阅了图书上新
lib.AddObserver(zhangsan)
lib.AddObserver(lisi)
// 图书上新了，将会通知两位读者
lib.AddBook(new Book("三国演义"))
lib.AddBook(new Book("水浒传"))