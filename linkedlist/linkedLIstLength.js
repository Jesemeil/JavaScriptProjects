const LinkedList = require("./linkedList");

let list = new LinkedList();

list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(90);
list.insertAtEnd(10);
list.insertAtEnd(12);
list.insertAtEnd(25);
const length = list.getLength();

console.log(`Length of the linked list: ${length}`);
