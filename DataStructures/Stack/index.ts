class Stack<T> {
  private count: number;
  private storage: Record<number, T>;

  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value: T) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop(): T | null {
    if (this.count === 0) return null;

    this.count--;
    const result = this.storage[this.count];        
    delete this.storage[this.count];
    return result;
  }

  peek(): T | null {
    if (this.count === 0)  return null; 

    return this.storage[this.count - 1];
  }

  size(): number {
    return this.count;
  }
}

export default Stack;