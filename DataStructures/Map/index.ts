class MyMap {
  private collection: Record<any, any>;
  private count: number;

  constructor() {
    this.collection = {};
    this.count = 0;
  }

  size(): number {
    return this.count;
  }

  set(key: any, value: any): void {
    this.collection[key] = value;
    this.count++;
  }
  
  has(key: any): boolean {
    return key in this.collection;
  }

  get(key: any): any {
    return this.has(key) ? this.collection[key] : null;
  }

  delete(key: any): void {
    if (this.has(key)) {
      delete this.collection[key];
      this.count--;
    }
  }
    
  values(): any[] {
    const result: any[] = [];

    for (const key in Object.keys(this.collection)) {
      result.push(key);
    }

    return result;
  }

  clear(): void {
    this.collection = {};
    this.count = 0;
  }
}
