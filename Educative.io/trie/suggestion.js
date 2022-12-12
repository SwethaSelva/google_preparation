class TrieNode {
  constructor() {
    this.searchWords = [];
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let currentNode = this.root;
    let prefix = '';
    for (let i = 0; i < word.length; i++) {
      prefix += word[i];
      if (!currentNode[word[i]]) currentNode[word[i]] = new TrieNode();
      if (currentNode[word[i]].searchWords.length < 3) currentNode[word[i]].searchWords.push(word);
      currentNode = currentNode[word[i]].children;
    }
    return true;
  }
}
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products = products.sort();
  let trie = new Trie();
  for (let i = 0; i < products.length; i++) {
    if (searchWord[0] !== products[i][0]) continue;
    trie.insert(products[i]);
  }

  let result = [];
  let prefix = '';
  let curTrie = trie.root;
  let i = 0;
  while (searchWord[i] in curTrie && i < searchWord.length) {
    result.push(curTrie[searchWord[i]].searchWords);
    prefix += searchWord[i];
    curTrie = curTrie[searchWord[i]].children;
    i++;
  }
  while (i++ < searchWord.length) result.push([]);
  return result;
};

console.log(suggestedProducts(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"));
console.log(suggestedProducts(["havaa"], "havana"));
console.log(suggestedProducts(["bags", "baggage", "banner", "box", "cloths"], "bags"));
console.log(suggestedProducts(["havana"], "tatiana"));
console.log(suggestedProducts(["razer", "blade", "knife", "cutter", "games"], "games"));