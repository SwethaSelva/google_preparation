class Heap {
    constructor () {
        this.heap = [];
    }
    comparator (a, b) {
        return b.freq - a.freq;
    }
    swap (idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    findChildren (parentIdx) {
        return [2 * parentIdx + 1, 2 * parentIdx + 2];
    }
    findParent (childIdx) {
        return Math.floor((childIdx - 1) / 2);
    }
    size () {
        return this.heap.length;
    }
    peek () {
        return this.heap[0];
    }
    insert (val) {
        let curIdx = this.heap.push(val) - 1;

        while (curIdx > 0) {
            let parentIdx = this.findParent(curIdx);
            if (parentIdx < 0 || this.comparator(this.heap[curIdx], this.heap[parentIdx]) >= 0) break;

            this.swap(curIdx, parentIdx);
            curIdx = parentIdx;
        }
        return true;
    }
    pop () {
        this.swap(0, this.size() - 1);
        let removeEle = this.heap.pop();
        let curIdx = 0;

        while (curIdx < this.size()) {
            let [leftIdx, rightIdx] = this.findChildren(curIdx);
            if (leftIdx >= this.size()) break;

            if (rightIdx < this.size() && this.comparator(this.heap[leftIdx], this.heap[rightIdx]) >= 0) {
                leftIdx = rightIdx;
            }

            if (this.comparator(this.heap[leftIdx], this.heap[curIdx]) >= 0) break;

            this.swap(curIdx, leftIdx);
            curIdx = leftIdx;
        }
        return removeEle;
    }
}
function longestRepeatingCharacterReplacement(s, k) {
    if (k + 1 >= s.length) return s.length;

    let freqHash = {};
    for (let i = 0; i <= k; i++) {
        freqHash[s[i]] = (freqHash[s[i]] || 0) + 1;
    }

    let maxHeap = new Heap();
    for (let char in freqHash) {
        maxHeap.insert({ char, freq: freqHash[char] })
    }

    let maxLen = k + 1;
    let left = 0;
    for (let right = k + 1; right < s.length; right++) {
        let curChar = s[right];
        let initChar = s[left];
        let { freq: peekFreq, char: peekChar } = maxHeap.peek();

        // sink
        if ((k + peekFreq) < (right - left)) {
            freqHash[initChar] -= 1;
            if (!freqHash[initChar]) delete freqHash[initChar];
            left++;
        }

        // expand
        if (peekChar === curChar) maxHeap.pop();
        freqHash[curChar] = (freqHash[curChar] || 0) + 1;
        maxHeap.insert({ char: curChar, freq: freqHash[curChar] });

        maxLen = Math.max(maxLen, maxHeap.peek().freq + k);
        
    }
    return maxLen;
}

console.log(longestRepeatingCharacterReplacement("coollooc" , 2)); // 6
console.log(longestRepeatingCharacterReplacement("aaaaaaaaaa" , 2)); // 10

