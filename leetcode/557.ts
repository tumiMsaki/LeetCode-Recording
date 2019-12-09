/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s: string): string {
  let str: string[] = s.split(' ')

  let reverse = (str: string):string => {
    let newStr = ''
    for (let i = 0, len = str.length; i < len; i++) {
      newStr = str[i] + newStr
    }
    return newStr
  }

  for (let i = 0, len = str.length; i < len; i++) {
    str[i] = reverse(str[i])
  }

  return str.join(' ')
}


console.log(reverseWords("Let's take LeetCode contest"))

