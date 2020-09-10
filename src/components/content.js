const typewriterStrings = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "555",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twentyone",
  22: "22",
  23: "23",
}

const getString = () => {
  let hours = parseInt(new Date().getHours())

  console.log(typewriterStrings[hours])
  return typewriterStrings[hours]
}

export { getString, typewriterStrings }
