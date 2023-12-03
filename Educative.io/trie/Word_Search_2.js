const DIRS = [[0, -1], [0, 1], [-1, 0], [1, 0]];

function isOutOfBoundary(board, row, col) {
  return row >= board.length || row < 0 || col >= board[0].length || col < 0;
}

class TrieNode {
  constructor() {
    this.children = {};
    this.word = '';
  }
}
class Trie {
  constructor(board) {
    this.trie = {};
    this.board = board;
  }
  addWord(word) {
    if (!word) return word;

    let node = this.trie;
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) node[word[i]] = new TrieNode();

      node = node[word[i]].children;
    }
    node.word = word;
  }
  searchDFS(row, col, node, curPath, result = []) {
    if (!node) return result;
    if (node.word) {
      console.log({ row, col, node })
      result.push(node.word);
    }
    let temp = this.board[row][col];
    this.board[row][col] = '*'
    for (let dir of DIRS) {
      let [curRow, curCol] = [row + dir[0], col + dir[1]];

      if (isOutOfBoundary(this.board, curRow, curCol)) continue;
      let curChar = this.board[curRow][curCol];
      if (curPath[`${curRow}-${curCol}`] || !node[curChar]) continue;

      // curPath[`${row}-${col}`] = true;
      this.searchDFS(curRow, curCol, node[curChar].children, curPath, result);
      // curPath[`${row}-${col}`] = false;
    }
    this.board[row][col] = temp;
    return result;
  }

}
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let boardTrie = new Trie(board);
  for (let i = 0; i < words.length; i++) {
    boardTrie.addWord(words[i]);
  }
  console.log('trie', JSON.stringify(boardTrie.trie));
  let result = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let char = board[i][j];
      if (!boardTrie.trie[char]) continue;

      result.push(
        ...boardTrie.searchDFS(
          i, j,
          boardTrie.trie[char].children,
          { [`${i}-${j}`]: true }
        )
      );
    }
  }
  return result;
};

console.log(findWords(
  [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
  ],
  ["oath", "pea", "eat", "rain"]
))

console.log(findWords(
  [
    ["o","a","b","n"],
    ["o","t","a","e"],
    ["a","h","k","r"],
    ["a","f","l","v"]],
  ["oa","oaa"]
));