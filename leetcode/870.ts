function xipai(arr1: number[], arr2: number[]) {
  let result = [].concat(arr2)
  let newArr1 = arr1.sort((x, y) => x - y)
  let newArr2 = arr2.sort((x, y) => x - y)
  let start = 0
  let final = arr2.length - 1
  for (let i = 0, len = newArr1.length; i < len; i++) {
    if (newArr1[i] > newArr2[start]) {
      result[result.findIndex(x => x === newArr2[start])] = newArr1[i]
      start++
    } else {
      result[result.findIndex(x => x === newArr2[final])] = newArr1[i]
      final--
    }
  }
  return result
}


console.log(xipai([12,24,8,32],[13,25,32,11]))