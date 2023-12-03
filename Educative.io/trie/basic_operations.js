class TrieNode {
  constructor(val, isWord = false) {
    this.val = val;
    this.children = {};
    this.isWord = isWord;
  }
}

class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!currentNode[word[i]]) currentNode[word[i]] = new TrieNode(word[i]);
      currentNode = currentNode[word[i]].children;
    }
    currentNode.isWord = true;
    return this.root;
  }
  search(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!currentNode[word[i]]) return false;
      currentNode = currentNode[word[i]].children;
    }
    if (!currentNode.isWord) return false;
    return true;
  }
  search_prefix(prefix) {
    let currentNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!currentNode[prefix[i]]) return false;
      currentNode = currentNode[prefix[i]].children;
    }
    return true;
  }
}

function generator(optrArr, valArr) {
  let trie = new Trie();
  for (let i = 1; i < optrArr.length; i++) {
    if (valArr[i] !== 'insert') console.log(trie[optrArr[i]](...valArr[i]));
    else trie[optrArr[i]](...valArr[i]);
  }
}

generator(["Trie", "insert", "search", "search", "search_prefix", "insert", "search"] , [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]])