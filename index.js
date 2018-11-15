// add solution here

var emptyArray = []

function theBeatlesPlay(musician,instrument) {
  for (var i = 0; i < 4; i++) {
    var mm = musician[i]
    var nn = instrument[i]
    emptyArray.push(`${mm} plays ${nn}`)
  }
  return emptyArray
}

console.log(emptyArray)


function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] = `${array[i]}!!!`
    i = i + 1
    }
  return array
}


function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    return newArray
  } while (number < 15 && ++number)
}

iLoveTheBeatles(test)
