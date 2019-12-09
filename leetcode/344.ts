/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s: string[]): void {
  let p1 = 0
  let p2 = s.length - 1
  while (p1 < p2) {
    [s[p1], s[p2]] = [s[p2], s[p1]]
    p1++
    p2-- 
  }
  console.log(s)
};


reverseString(["h","e","l","l","o"])