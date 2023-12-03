class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.trie = {};
  }
  addWord(word) {
    if (!word) return false;

    let curNode = this.trie;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!curNode[char]) curNode[char] = new TrieNode();

      curNode = curNode[char].children;
    }
    curNode.complete = true;
  }
  replaceShortPrefix(word) {
    if (!word) return work;

    let curNode = this.trie;
    let prefix = '';
    for (let i = 0; i < word.length; i++) {
      if (curNode.complete) return prefix;

      let char = word[i];
      prefix += char;
      if (!curNode[char]) return word;

      curNode = curNode[char].children;
    }

    return word;
  }
}

export function replaceWords(sentence, dictionary) {
  let trie = new Trie();
  for (let i = 0; i < dictionary.length; i++) {
    trie.addWord(dictionary[i]);
  }
  let sentenceWord = sentence.split(' ');
  for (let i = 0; i < sentenceWord.length; i++) {
    sentenceWord[i] = trie.replaceShortPrefix(sentenceWord[i]);
  }
  return sentenceWord.join(' ');
}

// Solution 2
class TrieNode1 {
  constructor() {
    this.isWord = false;
    this.children = {};
  }
}
class Trie1 {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) node[word[i]] = new TrieNode();
      if (i + 1 === word.length) node[word[i]].isWord = true;
      node = node[word[i]].children;
    }
    return true;
  }
  search(word) {
    let node = this.root;
    let resultWord = '';
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) return word;
      resultWord += word[i];
      if (node[word[i]].isWord) return resultWord;
      node = node[word[i]].children;
    }
    return word;
  }
}
function replaceWords1(sentence, dictionary) {
  let wordFromSent = sentence.split(' ');
  let result = '';
  let trie = new Trie();
  dictionary.forEach(word => trie.insert(word));
  for (let i = 0; i < wordFromSent.length; i++) {
    result += trie.search(wordFromSent[i]);
    if (i + 1 !== wordFromSent.length) result += ' ';
  }
  return result;
}

console.log(replaceWords("where there is a will there is a way", ["wi", "wa", "w"]));
console.log(replaceWords("the quick brown fox jumps over the lazy dog", ["qui", "f", "la", "d"]));
console.log(replaceWords("oops there is no matching word in this sentence", ["oops", "there", "is", "no", "matching", "word", "in", "this", "sentence"]));
console.log(replaceWords("i was born on twenty ninth february", ["wa", "w", "a", "ty", "nint", "nin", "n", "feb", "februa", "f"]));
console.log(replaceWords("i dont know where you are but i will find you eventually", ["cool", "how", "sunday", "sun", "x"]));
console.log(replaceWords("the cattle was rattled by the battery", ["cat", "bat", "rat"]));
