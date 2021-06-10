function expect(a) {
  return {
    toBe: function(b) {
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
    },
    toHaveBeenCalledWithArguments: function(b) {
      if (a.getCallArguments === b) {
        console.log("Pass")
      } else {
        console.log("Fail")
      }   
    }
  }
}
