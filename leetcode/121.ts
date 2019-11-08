/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices: number[]): number{
  let minPoint: number = Number.MAX_SAFE_INTEGER
  let maxValue: number = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i] < minPoint) {
      minPoint = prices[i]
    } else if (maxValue < prices[i] - minPoint) {
      maxValue = prices[i] - minPoint
    }
  }
  return maxValue
};

console.log(maxProfit([7,1,5,3,6,4]))