function arrayToList(array) {
    let list = null;
    for (let index = array.length - 1; index >= 0; index--) {
      list = { value: array[index], rest: list };
    }
    return list;
  }

  function listToArray(list) {
    let array = [];
    while (list !== null) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }
  
  function prepend(element, list) {
    return { value: element, rest: list };
  }
  
  function nth(list, n) {
    if (n === 0) {
      return list.value;
    } else if (list.rest === null) {
      return undefined;
    } else {
      return nth(list.rest, n - 1);
    }
  }
  
  
  let array = [1, 2, 3];
  let list = arrayToList(array);
  console.log(list);
  
  let newArray = listToArray(list);
  console.log(newArray); 
  
  let newList = prepend(0, list);
  console.log(newList); 
  
  console.log(nth(list, 1)); 
  console.log(nth(list, 3));
  