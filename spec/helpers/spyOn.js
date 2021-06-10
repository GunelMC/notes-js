function spyOn(object, method) {
  object[method] = (function() {
    let numberOfCalls = 0
    let calledWithArguments = []
    function spyFunction(...args) {
      numberOfCalls++
      calledWithArguments = args
    }
    spyFunction.getnumberOfCalls = () => {
      return numberOfCalls
    }
    spyFunction.getCallArguments = () => {
      return calledWithArguments
    }
    return spyFunction
  })()
  return object[method]
}
