const mapper = {
  A() {
    return 'you got A';
  },
  B() {
    return 'you got B';
  },
  C() {
    return 'you got C';
  },
  D() {
    return 'you got D';
  }
}

function getTextByLetter(letter) {
  return mapper[letter]();
}
getTextByLetter('A'); // you got A
getTextByLetter('C'); // you got C