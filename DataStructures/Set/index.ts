class MySet<T> {
  collection: T[];

  constructor() {
    this.collection = [];
  }
  
  values(): T[] {
    return this.collection;
  }

  has(element: T): boolean {
    return this.collection.indexOf(element) !== -1;
  }

  add(element: T): boolean {
    if (this.has(element)) return false;

    this.collection.push(element);
    return true;
  }

  remove(element: T): boolean {
    if (!this.has(element)) return false;
    
    const index = this.collection.indexOf(element);
    this.collection.splice(index, 1);
    return true;
  }

  size(): number {
    return this.collection.length;
  }

  union(otherSet: MySet<T>) {
    const unionSet = new MySet<T>();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(element => {
      unionSet.add(element);
    });

    secondSet.forEach(element => {
      unionSet.add(element);
    });

    return unionSet;
  }

  intersection(otherSet: MySet<T>) {
    const intersectionSet = new MySet<T>();
    const firstSet = this.values();
    
    firstSet.forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element)
      }
    });

    return intersectionSet;
  }

  difference(otherSet: MySet<T>) {
    const differenceSet = new MySet<T>();
    const firstSet = this.values();

    firstSet.forEach(element => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  }

  subSet(otherSet: MySet<T>) {
    const firstSet = this.values();
    return firstSet.every(element => otherSet.has(element))
  }
}