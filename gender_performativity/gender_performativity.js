// randomness is a represantation of everything that could
// affect your perceived gender. from how you talk to how you dress.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Showing off my array function skills
// in the cost of efficiency.
function getAverage(array) {
  return (array.reduce((total, element) => {
    return total + element;
  }) / array.length)
}

function* range(acts, start, end) {
  yield acts[start]
  if (start === end) return;
  yield* range(acts, start + 1, end);
}

// pure abstractions for the sake of argument.
// should actually be inside the Society class like
// theLineBetweenMannessAndWomanness because these notions 
// do not pop out of nowhere but from sOcieTy. 
// I declared them here to reduce spagetthification.
const PURE_MASCULINE_PERFORMANCE = 0;
const PURE_FEMININE_PERFORMANCE = 9;

class Society {
  constructor() {
    this.theLineBetweenMannessAndWomanness = getAverage([
      PURE_MASCULINE_PERFORMANCE,
      PURE_FEMININE_PERFORMANCE
    ])
  }
  
  isManness (acts) {
    if (getAverage(acts) < this.theLineBetweenMannessAndWomanness) {
      return 'This person is perceived as a man'
    } else {
      return 'This person is perceived as a woman'
    }
  }
  
  // "If the ground of gender is the stylized repetition of acts through
  // time, then this piece of code is a hot garbage that tries to 
  // summarize the phenomena of gender."
  // - Judith Butler
  observePersonBetweenIntervals({ acts }, start, end) {
    let iterator = range(acts, start, end);
    return this.isManness(
      new Array(Math.abs(start - end)).fill().map(() => {
        return iterator.next().value
      })
    )
  }
}

class Person {
  constructor() {
    this.acts = new Array(100).fill().map(() => {
      return getRandomNumber(
        PURE_MASCULINE_PERFORMANCE, 
        PURE_FEMININE_PERFORMANCE
      )
    })
  }
}

let person = new Person();
let society = new Society();

// your perceived gender is temporal and contextual whether 
// it is persistent throughout your whole life or not.
console.log(society.observePersonBetweenIntervals(person, 42, 69))

