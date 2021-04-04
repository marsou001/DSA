class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(element) {        
        if (this.collection.length === 0) {
            this.collection.unshift(element);
        } else {
            let added = false;
            for (let i = this.collection.length - 1; i >= 0; i--) {
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i + 1, 0, element);
                    added = true;
                    return;
                }
            }
            if (!added) {
                this.collection.unshift(element);
            }
        }        
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



var pq = new PriorityQueue(); 
debugger;
pq.enqueue(['Beau Carnes', 2]); 
debugger;
pq.enqueue(['Quincy Larson', 3]);
debugger;
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
debugger;
pq.enqueue(['Briana Swift', 2])
debugger;