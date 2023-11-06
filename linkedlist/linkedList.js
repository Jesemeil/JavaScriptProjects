const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;

    this.insertAtHead = (value) => {
      let newNode = new Node(value);
      newNode.nextElement = this.head;
      this.head = newNode;
    };

    this.getHead = () => {
      if (this.head !== null) {
        return this.head.data; 
      }
    };

    this.deleteAtHead = () => {
      if (this.head !== null) {
        this.head = this.head.nextElement;
      }
    };

    this.insertAtEnd = (value) => {
      let newNode = new Node(value);

      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.nextElement !== null) {
          current = current.nextElement;
        }
        current.nextElement = newNode;
      }
    };

    this.getLast = () => {
      if (this.head === null) {
        return null; 
      }
      let current = this.head;
      while (current.nextElement !== null) {
        current = current.nextElement;
      }
      return current;
    };

    this.deleteAtEnd = () => {
      if (this.head === null) {
        return; 
      }

      if (this.head.nextElement === null) {
        this.head = null; 
      } else {
        let current = this.head;
        let prev = null;

        while (current.nextElement !== null) {
          prev = current;
          current = current.nextElement;
        }

        prev.nextElement = null; 
      }
    };

    this.search = (val) => {
      let current = this.head;
      while (current !== null) {
        if (current.data === val) {
          return true; 
        }
        current = current.nextElement;
      }
      return false; 
    };

    this.delete = (val) => {
      if (this.head === null) {
        return; 
      }

      if (this.head.data === val) {
        this.head = this.head.nextElement; 
        return;
      }

      let current = this.head;
      let prev = null;

      while (current !== null && current.data !== val) {
        prev = current;
        current = current.nextElement;
      }

      if (current === null) {
        return; 
      }

      prev.nextElement = current.nextElement; 
    };
  }
}

  

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};

LinkedList.prototype.printElements = function () {
  let element = this.head;

  while (element !== null) {
    process.stdout.write(`${element.data} ->`);
    element = element.nextElement;
  }
  process.stdout.write(`null`);
};

module.exports = LinkedList;































































































// const Node = require("./node")

// class LinkedList {
//     constructor() {
//         this.head = null;

//         this.insertAtHead = (value) => {
//             let newNode = new Node(value);
//             newNode.nextElement = this.head;
//             this.head = newNode;
        
//         }

//         this.getHead = () => {
//             if(this.head != null){
//                 return this.head.value;
//             }

//         }

//          this.deleteAtHead= () => {
//             if (this.head !== null) {
//       this.head = this.head.nextElement;
//     }

//   }
//     }
// }
// LinkedList.prototype.isEmpty = function() {
//     return this.head === null;
// }
// LinkedList.prototype.printElements = function(){
//     let element = this.head;

//     while(element !== null){
//         process.stdout.write(`${element.value} ->`);
//         element = element.nextElement;
//     }
//     process.stdout.write(`null`);
// }
// module.exports = LinkedList;