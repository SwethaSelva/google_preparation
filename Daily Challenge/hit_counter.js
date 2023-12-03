/* Record a hit.
@param timestamp - The current timestamp (in 
					seconds granularity). */
let v = [];
function hit(timestamp) {
  v.push(timestamp);
}

function bs (target) {
  let s = 0;
  let e = timestamp.length - 1;
  
  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    if (v[m] === target) return m;
    
    if (v[m] < target) s = m + 1;
    else e = m - 1;
  }
  return s;
}
function getHits(timestamp)
{
  let minT = Math.max(0, timestamp - 300);
  let maxT = timestamp;
  
  let minIdx = bs(minT);
  let maxIdx = bs(maxT);
}

// Time Complexity : O(n)


// This code is contributed by akashish__
