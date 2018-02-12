// replace spaced with %20 
export function URLify(string) {
  return string.split(" ").join("%20")
} 

// Book is trying to get you to learn resizeing an array to fit in a new info
// so grow the string by 2 for every space and insert % where space was and 20 in new location
