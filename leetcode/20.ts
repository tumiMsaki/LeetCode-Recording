/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s: string): boolean{
    let temp = {
      "(": ")",
      "[": "]",
      "{": "}"
    }
    let stack: string[] = []
    for (let i of s) {
      if (i in temp) {
        stack.push(i)
      } else {
        if (i !== temp[stack.pop()]) {
          return false
        }
      }
    }

    return !stack.length
};

isValid("()[]{}")