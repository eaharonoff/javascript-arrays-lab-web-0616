const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens 
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens 
}

function appendKitten(name) {
  new_arr = [...kittens, name]
  return new_arr
}

function prependKitten(name) {
  new_arr = [name,...kittens]
  return new_arr
}

function removeLastKitten() {
  new_arr = kittens.slice(0,kittens.length-1)
  return new_arr
}

function removeFirstKitten() {
  new_arr = kittens.slice(1,kittens.length)
  return new_arr 
  
}