export class FILOList {
    constructor() {
      this.list = [];
      this.maxCapacity = 6;
    }
  
    push(element) {
      if (this.list.length === this.maxCapacity) {
        this.list.shift(); // Remove the first element if the list is at maximum capacity
      }
      this.list.push(element); // Add the new element to the end of the list
    }
  
    pop() {
      if (this.isEmpty()) {
        return null; // Return null if the list is empty
      }
      return this.list.pop(); // Remove and return the first element in the list
    }
  
    isEmpty() {
      return this.list.length === 0;
    }
  
    setList(newList) {
        this.list = [...newList];
    }

    size() {
      return this.list.length;
    }
  
    getList() {
      return this.list;
    }

    emptyList() {
      while (!this.isEmpty()) {
        this.list.pop();
      }
      return null;
    }
  }
  
  // Example usage:
//   const fifoList = new FIFOList();
  
//   fifoList.enqueue("A");
//   fifoList.enqueue("B");
//   fifoList.enqueue("C");
//   fifoList.enqueue("D");
//   fifoList.enqueue("E");
//   fifoList.enqueue("F");
//   fifoList.enqueue("G");
  
//   console.log(fifoList.getList()); // Output: ['B', 'C', 'D', 'E', 'F', 'G']
//   console.log(fifoList.dequeue()); // Output: 'B'
//   console.log(fifoList.getList()); // Output: ['C', 'D', 'E', 'F', 'G']
  
  