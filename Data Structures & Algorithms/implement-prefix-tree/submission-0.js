class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let currNode = this.root;

        for (const char of word) {
            if (!currNode.children[char]) {
                currNode.children[char] = new TrieNode();
            }
            currNode = currNode.children[char];
        }

        currNode.isEndOfWord = true;
    }

    search(word) {
        let currNode = this.root;

        for (const c of word) {
            if (!currNode.children[c]) {
                return false;
            }
            currNode = currNode.children[c];
        }

        if (!currNode.isEndOfWord) return false;
        return true;
    }

    startsWith(prefix) {
        let currNode = this.root;

        for (const c of prefix) {
            if (!currNode.children[c]) {
                return false;
            }
            currNode = currNode.children[c];
        }

        return true;
    }
}