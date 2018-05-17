

import SimpleFactory from './SimpleFactory.mjs'
var factory = new SimpleFactory()
var book = factory.createBook("B")
console.log(book.getType()) // B

