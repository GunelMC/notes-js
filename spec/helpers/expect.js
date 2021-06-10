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

    toThrowError: function(b) {
      try {
        a()
        console.log("Fail")
      }
      catch (exception_var) {
        if (exception_var === b) {
          console.log("Pass")
        } else {
        console.log(`Fail. Expected ${b}; Got ${exception_var}`)
        }
      }
    },

    toHaveBeenCalledWithArguments: function(b) {
      if (b instanceof Array) {
        if (JSON.stringify(a.getCallArguments()) === JSON.stringify(b)) {
          console.log("Pass")
        } else {
          console.log("Fail")
        }   
      } else {
        if (a.getCallArguments === b) {
          console.log("Pass")
        } else {
          console.log("Fail")
        }  
      }
    }
  }
}
