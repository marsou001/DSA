type QueueElement<T> = [T, number];

class PriorityQueue<T> {
  collection: QueueElement<T>[];

  constructor() {
    this.collection = [];
  }

  enqueue(element: QueueElement<T>): void {        
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

  dequeue(): QueueElement<T> | null {
    if (this.isEmpty()) return null;
    return this.collection.pop()!;
  }

  front(): QueueElement<T> | null {
    if (this.isEmpty()) return null;
    return this.collection[this.collection.length - 1];
  }

  back(): QueueElement<T> | null {
    if (this.isEmpty()) return null;
    return this.collection[0];
  }

  show(): QueueElement<T>[] {
    return this.collection;
  }

  size(): number {
    return this.collection.length;
  }

  isEmpty(): boolean {
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