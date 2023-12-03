class TrieNode {
  constructor() {
    this.children = {};
    this.complete = false;
  }
}

class WordDictionary {
  constructor() {
    this.trie = {};
    this.wordSet = new Set();
  }

  addWord(word) {
    if (!word) return true;
    this.wordSet.add(word);

    let curNode = this.trie;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!curNode[char]) curNode[char] = new TrieNode(char);

      curNode = curNode[char].children;
    }
    curNode.complete = true;
  }

  dfsSearch(node, curPos = 0, word = '') {
    if (!node) return false;
    if (curPos === word.length && node.complete) return true;

    let char = word[curPos];
    if (char !== '.') {
      if (!node[char]) return false;
      else return this.dfsSearch(node[char].children, curPos + 1, word);
    } else {
      for (let childChar in node) {
        if (this.dfsSearch(node[childChar].children, curPos + 1, word)) return true;
      }
    }

    return false;
  }

  searchWord(word) {
    if (!word.length) return false;

    return this.dfsSearch(this.trie, 0, word);
  }

  getWords() {
    return [...this.wordSet];
  }
}

class WordDictionary1 {
  constructor() {
    this.root = {}
  }

  // adding a new word to the dictionary
  addWord(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) node[word[i]] = new TrieNode();

      if (i + 1 === word.length) node[word[i]].complete = true;
      node = node[word[i]].children;
    }
    return word;
  }

  // get all words in the dictionary
  getWords(node = this.root, curWord = '', words = []) {
    if (!node) return words;
    for (let char in node) {
      if (node[char].complete) {
        words.push(curWord + char);
      }
      this.getWords(node[char].children, curWord + char, words);
    }
    return words;
  }

  // searching for a word in the dictionary
  searchWord(word, pos = 0, node = this.root) {
    let char = word[pos];
    if (char === '.') {
      for (let child in node) {
        if (pos + 1 === word.length && node[child].complete) return true;
        if (this.searchWord(word, pos + 1, node[child].children)) return true;
      }
    } else {
      if (!node[char]) return false;
      if (pos + 1 === word.length && node[char].complete) return true;
      return this.searchWord(word, pos + 1, node[char].children, pos + 1);
    }
    return false;
  }
}

function generator(optrArr, valArr) {
  let trie = new WordDictionary();
  for (let i = 1; i < optrArr.length; i++) {
    // if (valArr[i] === 'getWords')
    console.log(optrArr[i], valArr[i], trie[optrArr[i]](...valArr[i]));
    // else trie[optrArr[i]](...valArr[i]);
  }
  console.log('-----------------------------------------------------------------------')
}

// generator(
//   ["WordDictionary","addWord","addWord","addWord","getWords","searchWord","searchWord","searchWord","searchWord","getWords"] ,
//   [[],["bad"],["dad"],["mad"],[],["pad"],["bad"],[".ad"],["b.."],[]]); // false, true, true, true
// generator(
//   ["WordDictionary","addWord","addWord","addWord","getWords","searchWord"],
// [[],["hello"],["help"],["hi"],[],["h."]]
// );
generator(["WordDictionary", "getWords", "addWord", "addWord", "getWords", "searchWord", "addWord", "addWord", "searchWord", "getWords"], [[], [], ["apple"], ["grape"], [], ["strawberry"], ["banana"], ["banan"], ["bana.."], []]);
// generator(["WordDictionary","addWord","addWord","addWord","getWords","searchWord","searchWord","searchWord","searchWord","getWords"] , [[],["ox"],["box"],["pox"],[],["x"],["b."],["..x"],["b.."],[]]);
// generator(["WordDictionary","searchWord","addWord","addWord","getWords","searchWord"] , [[],["bad"],["dgwrgwrgrehehr"],["erthqethethetqth"],[],["...hqethethetqth"]]);