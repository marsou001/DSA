class Set {
    constructor() {
        this.collection = [];

        this.values = function() {
            return this.collection;
        }

        this.has = function(element) {
            return this.collection.indexOf(element) !== -1;
        }

        this.add = function(element) {
            if (!this.has(element)) {
                this.collection.push(element);
                return true;
            }
            return false;
        }

        this.remove = function(element) {
            if (this.has(element)) {
                const index = this.collection.indexOf(element);
                this.collection.splice(index, 1);
                return true;
            }
            return false;
        }

        this.size = function() {
            return this.collection.length;
        }

        this.union = function(otherSet) {
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

        this.intersection = function(otherSet) {
            const intersectionSet = new Set();
            const firstSet = this.values();
            
            firstSet.forEach(function(elemenet) {
                if (otherSet.has(elemenet)) {
                    intersectionSet.add(elemenet)
                }
            });

            return intersectionSet;
        }

        this.difference = function(otherSet) {
            const differenceSet = new Set();
            const firstSet = this.values();

            firstSet.forEach(function(element) {
                if (!otherSet.has(element)) {
                    differenceSet.add(element);
                }
            });

            return differenceSet;
        }

        this.subSet = function(otherSet) {
            const firstSet = this.values();
            return firstSet.every(function(element) {
                return otherSet.has(element);
            });
        }
    }
}