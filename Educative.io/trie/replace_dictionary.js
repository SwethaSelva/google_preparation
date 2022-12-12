class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = {};
  }
}
class Trie {
  constructor () {
    this.root = {};
  }
  insert (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) node[word[i]] = new TrieNode();
      if (i + 1 === word.length) node[word[i]].isWord = true;
      node = node[word[i]].children;
    }
    return true;
  }
  search (word) {
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
function replaceWords(sentence, dictionary){
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

console.log(replaceWords("where there is a will there is a way" , ["wi","wa","w"]));
console.log(replaceWords("the quick brown fox jumps over the lazy dog" , ["qui","f","la","d"]));
console.log(replaceWords("oops there is no matching word in this sentence" , ["oops","there","is","no","matching","word","in","this","sentence"]));
console.log(replaceWords("i was born on twenty ninth february" , ["wa","w","a","ty","nint","nin","n","feb","februa","f"]));
console.log(replaceWords("i dont know where you are but i will find you eventually" , ["cool","how","sunday","sun","x"]));
console.log(replaceWords("the cattle was rattled by the battery" , ["cat","bat","rat"]));
