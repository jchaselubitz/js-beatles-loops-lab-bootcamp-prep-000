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
    var num = number
    do {
      newArray.push("I love the Beatles!")
      return newArray
      increment(num)
    } while (num < 15)
    function increment(num) {
      num = num + 1
    }
}


/*
function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number++
    return newArray
  } while (number < 15)
}


iLoveTheBeatles(7)

console.log(newArray)


function iLoveTheBeatles(number) {
  var newArray = []
  return function() {
    do {
      newArray.push("I love the Beatles!")
      return newArray
    } while (number < 15 && ++number)
  }
  return newArray
}

*/
