class Node {
    constructor(char = '') {
        this.val = char;
        this.children = new Array(10).fill(0);
    }
}
class Trie {
    constructor () {
        this.root = new Node();
    }
    insert (word) {
        let cur = this.root;
        let val = '';

        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!cur[char]) cur[char] = new Node(char);
            cur = cur[char].children;
        }
    }
}
function lexicographicalOrder(n){
    let result = [];
    if (n < 10) {
        for (let i = 1; i <= n; i++) result.push(i);
        return result;
    }

    let trie = new Trie();
    for (let i = 1; i <= n; i++) trie.insert(`${i}`);

    let queue = [trie.root];
    console.log({ queue })
    while (queue) {
        let cur = queue.shift();
        result.push(cur.val);

        for (let i = 0; i < cur.children.length; i++) {
            if (!cur.children[i]) continue;
            let value = cur.val + cur.children[i];
            cur.children[i].val += cur.val
            result.push(value);
            queue.push([cur[i].children, value]);
        }
    }
    return result;
}

console.log(lexicographicalOrder(33))