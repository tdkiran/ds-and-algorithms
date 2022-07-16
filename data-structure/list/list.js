// Implementation 1 - Javascript
// using function constructor pattern

function List() {
      this.list = []; // not private for sake of learning
      this.listSize = this.list.length;
      this.pos = 0;
}

List.prototype.insert = function (num) {
      const precedingElements = this.list.splice(0, this.pos + 1);
      precedingElements.push(num);
      this.list = precedingElements.concat(this.list);
      this.pos = this.pos + 1;
}

List.prototype.log = function () {
      console.log(this.list);
}

List.prototype.getElement = function () {
      return list[this.pos];
}

List.prototype.end = function () {
      this.pos = this.list[this.length - 1];
}

List.prototype.start = function () {
      this.pos = this.list[0];
}

List.prototype.currPos = function () {
      return this.pos;
}

List.prototype.moveTo = function (pos) {
      if (this.list[pos]) {
            this.pos = pos;
      }
}










const list = new List();



