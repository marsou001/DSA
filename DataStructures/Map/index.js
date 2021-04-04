class Map {
    constructor() {
        this.collection = {};
        this.count = 0;

        this.size = function() {
            return this.count;
        }

        this.set = function(key, value) {
            this.collection[key] = value;
            this.count++;
        }

        this.has = function(key) {
            return (key in this.collection);
        }

        this.get = function(key) {
            return (key in this.collection) ? this.collection[key] : null;
        }

        this.delete = function(key) {
            if (key in this.collection) {
                delete this.collection[key];
                this.count--;
            }
        }

        this.values = function() {
            const result = [];
            for (let key of Object.keys(this.collection)) {
                result.push(this.collection[key]);
            }
            return result.length !== 0 ? result : null;
        }

        this.clear = function() {
            this.collection = {};
            this.count = 0;
        }
    }
}