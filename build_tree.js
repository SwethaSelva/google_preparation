function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var buildTree = function(preorder, inorder) {
    return recursive()

    function recursive (sIdx = 0, eIdx = inorder.length - 1) {
        let nodeVal = preorder.shift();
console.log({ preorder })
        let nodeIdx = -1;
        for (let i = sIdx; i <= eIdx; i++) {
            if (inorder[i] === nodeVal) {
                nodeIdx = i;
                break;
            }
        }
        let node = new TreeNode(nodeVal);

        if (nodeIdx - 1 >= sIdx) node.left = recursive(sIdx, nodeIdx - 1);
        if (nodeIdx + 1 < eIdx) node.right = recursive(nodeIdx + 1, eIdx);
        return node;
    }
};

console.log(JSON.stringify(buildTree([3,9,20,15,7], [9,3,15,20,7])))