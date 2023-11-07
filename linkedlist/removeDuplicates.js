const LinkedList = require("./linkedList");

const list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(1);
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(4);

list.removeDuplicates();

const result = list.printElements();

console.log(`List after removing duplicates: ${result}`);
