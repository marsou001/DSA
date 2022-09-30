class Queue<T> {
  private collection: T[];

  constructor() {
    this.collection = [];
  }
  
  enqueue(element): void {
    this.collection.unshift(element);
  }

  dequeue(): T | null {
    if (this.isEmpty()) return null;
    
    return this.collection.pop()!;
  }

  front(): T | null {
    if (this.isEmpty()) return null;

    return this.collection[this.collection.length - 1];
  }

  back(): T | null {
    if (this.isEmpty()) return null;

    return this.collection[0];
  }

  show(): T[] {
    return this.collection;
  }

  size(): number {
    return this.collection.length;
  }

  isEmpty(): boolean {
    return this.collection.length === 0;
  }
}

export default Queue;