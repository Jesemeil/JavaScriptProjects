function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sCount = {};
  let tCount = {};

  for (const char of s) {
    sCount[char] = (sCount[char] || 0) + 1;
  }

  for (const char of t) { 
    tCount[char] = (tCount[char] || 0) + 1;
  }

  for (const char in sCount) { 
    if (sCount[char] !== tCount[char]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("chair", "cheer"));    
