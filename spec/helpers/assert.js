var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('.')
    }
  }
}


function expect(a) {
  return {
    toEqual: function(b) {
      // compare a and b
      if (a == b) {
            console.log('Pass')
      } else {
        console.log('Fail')
      }
      },
    toTripleEqual: function(b) {
      // compare a and b
      if (a === b) {
            console.log('Pass')
        } else {
          console.log('Fail')
        }
    },
    toBeInstanceOf: function(b) {
      if (a instanceof b) {
        console.log("Pass")
      } else {
        console.log("Fail")
      }   
    }
  }
}


function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}