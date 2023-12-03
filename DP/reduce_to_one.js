/**
 * Give n int, follow below steps to reduce it to one
 * 1) Subtract by one (n => n - 1)
 * 2) If divisible by 2, divide it by two (n => n/2)
 * 3) If divisible by 3, divide it by three (n => n/3)
 */
function reduceToOne (n) {
	let dp = [0];

	for (let i = 1; i < n; i++) {
		let num = i + 1;
		// Subtract
		dp[i] = dp[i-1];
		// divisible by 2
		if (num % 2 === 0) dp[i] = Math.min(dp[i], dp[num/2 - 1]);
		// divisible by 3
		if (num % 3 === 0) dp[i] = Math.min(dp[i], dp[num/3 - 1]);

		dp[i] += 1;
	}
	return dp[n-1];
}

console.log(reduceToOne(10));
console.log(reduceToOne(100));
console.log(reduceToOne(12));