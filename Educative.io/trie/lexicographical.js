class TrieNode {
    constructor(char = '') {
        this.children = {};
        this.isString = false;
        this.char = char;
    }
}

class Trie {
    constructor () {
        this.trie = {};
    }
    add (numStr) {
        let curNode = this.trie;
        for (let i = 0; i < numStr.length; i++) {
            let char = numStr[i];
            if (!curNode[char]) curNode[char] = new TrieNode(char);

            if (i === numStr.length - 1) curNode[char].isString = true;
            curNode = curNode[char].children;
        }
        curNode.isString = true;
    }

    dfs (node, curStr = '', result = []) {
        if (!node) return result;
        if (node.isString) result.push(+curStr);

        for (let childChar in node) {
            this.dfs(node[childChar].children, curStr + childChar, result);
        }

        return result;
    }
    getAll () {
       return this.dfs(this.trie) 
    }
}

function lexicographicalOrder(n){
    let trie = new Trie();
    for (let i = 1; i <= n; i++) {
        trie.add(`${i}`);
    }
    // console.log(JSON.stringify(trie));
    return trie.getAll();
}

console.log(lexicographicalOrder(11));