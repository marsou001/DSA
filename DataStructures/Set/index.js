class Set {
    constructor() {
        this.collection = [];
    }
    
    values() {
        return this.collection;
    }

    has(element) {
        return this.collection.indexOf(element) !== -1;
    }

    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    }

    remove(element) {
        if (this.has(element)) {
            const index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    size() {
        return this.collection.length;
    }

    union(otherSet) {
        const unionSet = new Set();
        const firstSet = this.values();
        const secondSet = otherSet.values();

        firstSet.forEach(function(element) {
            unionSet.add(element);
        });

        secondSet.forEach(function(element) {
            unionSet.add(element);
        });

        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set();
        const firstSet = this.values();
        
        firstSet.forEach(function(elemenet) {
            if (otherSet.has(elemenet)) {
                intersectionSet.add(elemenet)
            }
        });

        return intersectionSet;
    }

    difference(otherSet) {
        const differenceSet = new Set();
        const firstSet = this.values();

        firstSet.forEach(function(element) {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });

        return differenceSet;
    }

    subSet(otherSet) {
        const firstSet = this.values();
        return firstSet.every(function(element) {
            return otherSet.has(element);
        });
    }
}