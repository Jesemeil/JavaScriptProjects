function compare(s, t) {
    let index1 = s.length - 1;
    let index2 = t.length - 1;
    let skipS = 0;
    let skipT = 0;
  
    while (index1 >= 0 || index2 >= 0) {
      while (index1 >= 0) {
        if (s.charAt(index1) === '#') {
          skipS++;
          index1--;
        } else if (skipS > 0) {
          skipS--;
          index1--;
        } else {
          break;
        }
      }
  
      while (index2 >= 0) {
        if (t.charAt(index2) === '#') {
          skipT++;
          index2--;
        } else if (skipT > 0) {
          skipT--;
          index2--;
        } else {
          break;
        }
      }
  
      if (index1 >= 0 && index2 >= 0 && s.charAt(index1) !== t.charAt(index2)) {
        return false;
      }
  
      if (index1 >= 0 !== index2 >= 0) {
        return false;
      }
  
      index1--;
      index2--;
    }
  
    return true;
  }
  
  console.log(compare("a#b#d#pqrs#", "ac#d##pqr"));  
  console.log(compare("abchr###chr", "abchr")); 
  console.log(compare("aq#", "r"));    
  