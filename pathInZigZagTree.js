var pathInZigZagTree = function(label, path = []) {
  path.unshift(label);
  if (label < 2) return path;

  let depth = ~~Math.log2(label);
  // if (depth < 0) return path;

  let [leftRange, rightRange] = [2 ** depth, 2 ** (depth + 1) - 1];

  if (depth % 2) { // reverse
    let position = Math.floor((rightRange - label) / 2);
    label = (2 ** (depth - 1)) + position;
  } else {
    let position = Math.floor((label - leftRange) / 2);
    label = leftRange - 1 - position;
  }

console.log({ label })
  return pathInZigZagTree(label, path);
};

// console.log(pathInZigZagTree(14));
console.log(pathInZigZagTree(26));