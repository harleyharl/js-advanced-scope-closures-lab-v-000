function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
    let start = parseInt( startingBlock );
    let end = parseInt( endingBlock );
    let distance = ((Math.abs(start - end)))
    if (distance > blockRange){
      return `${distance - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(percentage){
  return function(tripPrice){
    return (tripPrice * percentage)
  }
}

function createDriver(){
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
