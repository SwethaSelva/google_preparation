function findAllSubsets1(v) {
  let subsets = [[]];
  for (let i = 0; i < v.length; i++) {
    let len = subsets.length;
    for (let j = 0; j < len; j++) {
      subsets.push([...subsets[j], v[i]]);
    }
  }
  return subsets;
}


function getBit(num, bit) {
  // shifts the first operand the specified number of bits to the left
  let temp = 1 << bit;
  temp = temp & num;

  // if binary number and current subset count are equal,
  // return 1 else return 0
  return temp !== 0;
}

function findAllSubsets(v) {
  if (v.length === 0) return [[]];
  let sets = [];
  let subsetsCount = 2 ** v.length;
  for (let i = 0; i < subsetsCount; i++) {
    let st = new Set();
    for (let j = 0; j < v.length; j++) {
      if (getBit(i, j) == 1 && !st.has(v[j])) {
        st.add(v[j]);
      }
    }
    sets.push(Array.from(st));
  }
  return sets;
}


console.log(findAllSubsets([1]));
console.log(findAllSubsets([1,2]));
console.log(findAllSubsets([2,5,7]));
console.log(findAllSubsets([1,2,3,4]));
console.log(findAllSubsets([0]));
console.log(findAllSubsets([7,3,1,5]));
console.log(findAllSubsets([-1,-10,-3,1,2,4]));
