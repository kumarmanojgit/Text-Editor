class Stack {
  constructor() {
    this.size = 0;
    this.stack = []; //initialy stack will empty;
    this.buffer = 5; //this help to over come fron stack overcome or under flow;
  }
  //when click resent button then stack will stack will empty
  clear() {
    this.size = 0;
    this.stack = [];
  }
  isEmpty() {
    return this.size == 0;
  }
  top() {
    return this.size - 1;
  }
  pop() {
    if (!this.isEmpty()) {
      this.size--;
      return this.stack.top();
    } else {
      return [-1, ""];
    }
  }
  // 0--> insert and 1-->delete
  push(type, char) {
    //insert first element into stack and it's type as well
    if (this.isEmpty()) {
      if (type == 0) this.stack.push([type, char]);
    } else {
      let temp = this.top();
      if (temp[0] == type && temp[1].length < this.buffer) {
        let top = this.pop();
        top[1] = char + top[1];
        this.stack.push(top);
      }
    }
  }
}
