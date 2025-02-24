interface Index {
  left: number
  right: number
}

/** 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s: string): string {
  if (!s || s.length === 0) return s
  if (s.length === 1) return s[0]
  if (s.length === 2) {
    s[0] === s[1] ? s[0] + s[1] : s[1]
  }
  let result = ""

  var calPalindromeIndex = function(
    left: number,
    right: number,
    s: string
  ): Index {
    let len = s.length
    while (left >= 0 && right < len && s[left] == s[right]) {
      left--
      right++
    }
    return { left: left + 1, right: right }
  }
  for (let i = 0, len = s.length; i < len; i++) {
    let even = ""
    let odd = ""
    if (s[i] == s[i + 1]) {
      let evenIndex = calPalindromeIndex(i - 1, i + 2, s)
      even = s.slice(evenIndex.left, evenIndex.right)
    }
    let oddIndex = calPalindromeIndex(i - 1, i + 1, s)
    odd = s.slice(oddIndex.left, oddIndex.right)
    let re = odd.length > even.length ? odd : even
    result = result.length > re.length ? result : re
  }
  return result
}

