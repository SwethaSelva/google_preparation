// Trie
const ALPHACOUNT = 26;
const alphaToIdx = char => char.charCodeAt() - 97;

class TrieNode {
    constructor (val = '') {
        this.val = val;
        this.isWord = false;
        this.children = new Array(ALPHACOUNT).fill(0);
    }
}
class Trie {
    constructor () {
        this.trieData = new Array(ALPHACOUNT).fill(0);
    }
    insert(word) {
        let curNode = this.trieData;

        for (let i = 0; i < word.length; i++) {
            let idx = alphaToIdx(word[i]);
            if (!curNode[idx]) curNode[idx] = new TrieNode(word[i]);
            if (i === word.length - 1) curNode[idx].isWord = true;
            curNode = curNode[idx].children;
        }
        return true;
    }
    getNode (node, char) {
        return node[alphaToIdx(char)];
    }
}
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak1 = function(s, wordDict) {
    let trie = new Trie();
    // Insert all wordDict to Trie DS
    for (let i = 0; i < wordDict.length; i++) {
        trie.insert(wordDict[i]);
    }

    // Traverse using stack
    let node = trie.getNode(trie.trieData, s[0]);
    if (!node) return false;

    let stack = [0];
    while (stack.length) {
        let curIdx = stack.pop();
        let curNode = trie.trieData;

        while (curIdx < s.length) {
            curNode = trie.getNode(curNode, s[curIdx]);
            if (!curNode) break;
            if (curNode.isWord) {
                if (curIdx === s.length - 1) return true;
                stack.push(curIdx + 1);
            }
            curNode = curNode.children;
            curIdx++;

        }
        // if (curIdx === s.length) return true;
    }
    return false;
};

// BackTracking with memoization
var wordBreak = function(s, wordDict, sIdx = 0, mem = {}) {
    if (sIdx >= s.length) return true;

    if (mem[sIdx] !== -1) return mem[sIdx];
    let res = false;
    for (let i = 0; i < wordDict.length; i++) {
        if (s.substr(sIdx, wordDict[i].length) !== wordDict[i]) continue;
        if (wordBreak(s, wordDict, sIdx + wordDict[i].length), mem) {
            res = true;
            break;
        }
    }
    return mem[sIdx] = res;
};

// DP - bottom-up
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < s.length; i++) {
        if (dp[i] === true) {
            for (let word of wordDict) {
                if (word === s.substr(i, word.length)) dp[i+word.length] = true
            }
        }
    }
    return dp[s.length];
}

console.log(wordBreak("leetcode", ["leet","cod", "leetcode"])); // true
console.log(wordBreak("leetcode", ["leet","cod", "leetcod"])); // false
console.log(wordBreak("applepenapple", ["apple","pen", "apple"])); // true
console.log(wordBreak("catsandog", ["cats","cat", "and", "dog", 'og'])); // true
console.log(wordBreak("aaaaaaa", ["aa","aaaa"])); // false
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])); // false