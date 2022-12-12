class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = {}
  }

  // adding a new word to the dictionary
  addWord(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) node[word[i]] = new TrieNode();
      
      if (i + 1 === word.length) node[word[i]].isWord = true;
      node = node[word[i]].children;
    }
    return word;
  }

  // get all words in the dictionary
  getWords(node = this.root, curWord = '', words = []) {
    if (!node) return words;
    for (let char in node) {
      if (node[char].isWord) {
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
        if (pos + 1 === word.length && node[child].isWord) return true;
        if (this.searchWord(word, pos + 1, node[child].children)) return true;
      }
    } else {
      if (!node[char]) return false;
      if (pos + 1 === word.length && node[char].isWord) return true;
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
generator(["WordDictionary","getWords","addWord","addWord","getWords","searchWord","addWord","addWord","searchWord","getWords"] , [[],[],["apple"],["grape"],[],["strawberry"],["banana"],["banan"],["bana.."],[]]);
// generator(["WordDictionary","addWord","addWord","addWord","getWords","searchWord","searchWord","searchWord","searchWord","getWords"] , [[],["ox"],["box"],["pox"],[],["x"],["b."],["..x"],["b.."],[]]);
// generator(["WordDictionary","searchWord","addWord","addWord","getWords","searchWord"] , [[],["bad"],["dgwrgwrgrehehr"],["erthqethethetqth"],[],["...hqethethetqth"]]);
