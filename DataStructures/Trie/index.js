class Node {
    constructor() {
        this.children = new Map();
        this.end = false;        
    }

    setEnd() {
        this.end = true;
    }

    isEnd() {
        return this.end;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    add(input, node = this.root) {
        if (input.length === 0) {
            node.setEnd();
            return;
        } else if (!node.children.has(input[0])) {
            node.children.set(input[0], new Node());
            this.add(input.slice(1), node.children.get(input[0]));
        } else {
            this.add(input.slice(1), node.children.get(input[0]))
        }
    }

    isWord(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.children.has(word[0])) {
                return false;
            } else {
                node = node.children.get(word[0]);
                word = word.slice(1);
            }
        }
        return (node.children.has(word) && node.children.get(word).isEnd()) ? true : false;
    }

    print() {
        let words = new Array();
        
        let search = function(node, string) {            
            if (node.children.size !== 0) {
                for (let letter of node.children.keys()) {
                    search(node.children.get(letter), string.concat(letter));
                }
                if (node.isEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        }

        search(this.root, new String());
        return words;
    }
}