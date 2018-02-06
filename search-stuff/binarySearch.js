const getCenterItem = (array) => {
  const halfOfArrayLength = array.length / 2
  const parsed = {
    firstHalf: [],
    secondHalf: [],
    centerItem: null
  }
  
  if(array.length % 2 === 0) {
    parsed.firstHalf = array.slice(0, halfOfArrayLength)
    parsed.secondHalf = array.slice(halfOfArrayLength)

    return parsed
  } else {
    parsed.firstHalf = array.slice(0, parseInt(halfOfArrayLength)) 
    parsed.secondHalf = array.slice(parseInt(halfOfArrayLength) + 1)

    parsed.centerItem = { item: array[halfOfArrayLength], index:  halfOfArrayLength }

    return parsed
  }
}

const parseArray = (array) => {
  const parsed = getCenterItem(array)
  if(parsed.centerItem === null) {
    
  } else {
    return parsed.centerItem
  }
}

export function binarySearch(numbersArray, match) {
  // must be sorted for binary search to work
  // array is already sorted though since sort() is hilarious

  const itemInfo = parseArray(numbersArray)
  console.log('itemInfo', itemInfo);
  if(itemInfo.centerItem === match) {
    return `found! at ${itemInfo.index}`
  }

  // if()

  // if(centeredItem > match)
  
}

