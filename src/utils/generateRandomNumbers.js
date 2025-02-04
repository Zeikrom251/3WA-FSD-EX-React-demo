const generateRandomNumbers = () => {
  let numbers = []

  while (numbers.length < 20) {
    let num = Math.floor(Math.random() * 20) + 1
    if (!numbers.includes(num)) {
      numbers.push(num)
    }
  }
  return numbers
}

export default generateRandomNumbers
