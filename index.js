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
  while (i < 4) {
    if (array === null) {
      return null
    } else {
      array[i] = `${array[i]}!!!`
      i = i + 1
    }
  }
  return array
}

/*
var test = 5

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    return newArray.push("I love the Beatles!")
    number = number + 1
  } while (number < 15)
}

iLoveTheBeatles(test)

console.log(newArray)
*/
