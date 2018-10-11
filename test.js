// Question 1

function strangeSequence(n) {
  let sequence = []
  let el = n

  while (!sequence.includes(el)) {
    sequence.push(el)
    el = squareDigits(el)
  }

  return sequence.length + 1
}

// helper function to find the next value in the sequence
function squareDigits(n) {
  let digits = n.toString().split("").map(el => parseInt(el))
  return digits.reduce((acc, current) => acc + current ** 2, 0)
}


// Question 2

function largeLock(a, b) {
  let acc = 0

  for(let i = 0; i < a.length; i++) {
    acc += numberOfClicks(a[i], b[i], 5)
  }

  return acc
}

// helper function to determine number of clicks
function numberOfClicks(x, y, halfway) {
  if (x === y) return 0
  if (y === 0 && x <= halfway) return x
  if (x === 0 && y <= halfway) return y
  if (x - y > 0 && x - y < halfway) return x - y

  if (x > y) {
    if (y >= Math.abs(x - halfway)) {
      return Math.abs(x - y)
    }

    if (y < Math.abs(x - halfway)) {
      return (2 * halfway) + y - x
    }
  } else {
    return numberOfClicks(y, x, halfway)
  }
}


// Question 3

function alienLock(start, end, set) {
  let acc = 0

  for (let i = 0; i < start.length; i++) {
    let x = set.indexOf(start[i])
    let y = set.indexOf(end[i])

    acc += numberOfClicks(x, y, set.length / 2)
  }

  return acc
}
