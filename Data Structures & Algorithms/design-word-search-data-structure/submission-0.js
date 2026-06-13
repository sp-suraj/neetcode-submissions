class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currNode = this.root;

        for(let c of word) {
            if(!currNode.children[c]) {
                currNode.children[c] = new TrieNode();
            }
            currNode = currNode.children[c];
        }
        currNode.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currNode = this.root;
        
        function dfs(index, node) {
            if(index === word.length) {
                if (node.isEndOfWord) return true;
                else false;
            }

            let char = word[index];

            if(char === ".") {
                for(let key in node.children) {
                    let childNode = node.children[key];

                    if(dfs(index+1, childNode)) return true;
                }
                return false;
            } else {
                if(!node.children[char]) return false;
                return dfs(index+1, node.children[char]);
            }
        }
        

        return dfs(0, currNode);
    }
}
