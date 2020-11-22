class Queue {
    constructor() {
        this.elements = [];
    }
    push(e) {
        this.elements.push(e);
    }
    pop(e) {
        return this.elements.shift(e);
    }
    isEmpty() {
        return this.elements.length == 0;
    }
    peek() {
        return !this.isEmpty() ? this.elements[0] : undefined;
    }
}

module.exports.Queue = Queue;