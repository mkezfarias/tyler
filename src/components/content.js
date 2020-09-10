const typewriterStrings = {
  0: "is sleeping.",
  1: "is sleeping.",
  2: "is sleeping.",
  3: "is sleeping.",
  4: "is sleeping.",
  5: "is sleeping.",
  6: "is waking up.",
  7: "is drinking coffee.",
  8: "is reading.",
  9: "is answering emails.",
  10: "is on a Zoom call.",
  11: "is meeting interesting people.",
  12: "is going for a walk.",
  13: "is eating lunch.",
  14: "is asking questions.",
  15: "is focused.",
  16: "is on the phone.",
  17: "is on Slack.",
  18: "is eating dinner with his family.",
  19: "is playing games.",
  20: "is cleaning up.",
  21: "is reading a book.",
  22: "is preparing for tomorrow.",
  23: "is getting sleepy.",
}

const getString = () => {
  let hours = parseInt(new Date().getHours())

  console.log(typewriterStrings[hours])
  return typewriterStrings[hours]
}

export { getString, typewriterStrings }
