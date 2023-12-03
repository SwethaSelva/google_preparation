function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var generateTrees = function(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let head = new TreeNode(i);
        let visitedSet = new Set([i]);
        buildTree(visitedSet, head, head, 1, 1);
    }

    
    function buildTree (visitedSet = new Set(), lastNode, head) {
        if (n <= visitedSet.size) {
            result.push(JSON.parse(JSON.stringify(head)));
            return result;
        }

        for (let i = 1; i <= n; i++) {
            if (visitedSet.has(i)) /** || i > rLimit || i < lLimit) */ continue; // check range for valid BST

            visitedSet.add(i);
            let node = new TreeNode(i);
            if (lastNode.val > i) lastNode.left = node;
            if (lastNode.val < i) lastNode.right = node;
            buildTree(visitedSet, node, head);
            visitedSet.delete(i);
        }
    }
    return result; 
};

console.log(generateTrees(3));
console.log(generateTrees(4));