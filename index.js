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

/*
function johnLennonFacts(array) {
  var i = 3
  while (i < 4) {
    array[i] = `${array[i]} + "iii"`
    i = i - 1
  }
  return array
}
*/

var test = 5

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    number = number + 1
    return newArray.push("I love the Beatles!")
  } while (number < 15)
}

iLoveTheBeatles(test)

console.log(newArray)
