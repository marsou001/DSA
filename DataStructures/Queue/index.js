class Queue {
    constructor() {
        this.collection = [];
    }
    
    enqueue(element) {
        this.collection.unshift(element);
    }

    dequeue() {
        this.collection.pop();
    }

    front() {
        return this.collection[this.collection.length - 1];
    }

    back() {
        return this.collection[0];
    }

    show() {
        return this.collection;
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}