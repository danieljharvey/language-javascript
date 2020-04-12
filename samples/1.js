const dog = "poo"

// no reassignment
//dog = "something else"

const cat = "loo"

const leg = dog + cat

const obj = {
  name: "ys",
  age: 100
}

// not sure why this breaks
// const anotherObject = {...obj, name: "poo" }

const arr = [1,2,3,4]

const spreadArr = [...arr, 5,6,7]

// i don't want this either because it's a method
// const added = spreadArr.map(a => a + 1)

// f :: b -> a -> b
const reduce = (f) => (b) => (as) => {
  const [a, ...rest] = as
  if (a === undefined) {
    return b
  }
  const calculated = f(b)(a)
  return reduce(f)(calculated)(rest)
}

const length = reduce((b) => (a) => b + 1)(0)

const sum = reduce((b) => (a) => b + a)(0)

// i want this to break
// const breakPlease = new Array()

// why 
// sfsdf

// every module must have a main function
const main = () => {
  
  return {
    arrLength: length(spreadArr),
    arrSum: sum(spreadArr)
  }
}


module.exports = { main: main }