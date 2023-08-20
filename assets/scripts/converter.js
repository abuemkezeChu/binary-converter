'use strict'

const conversionSelect = document.getElementById('conversion-type')
const input = document.getElementById('input')
const btn = document.getElementById('convert-btn')
const output = document.getElementById('output')

// convert from decimal to binary

function decimalToBinary(decimalNumber) {
  if (decimalNumber === 0) {
    return '0'
  }

  let binary = ''
  while (decimalNumber > 0) {
    binary = (decimalNumber % 2) + binary
    decimalNumber = Math.floor(decimalNumber / 2)
  }

  return binary
}

// convert from binary to decimal

function binaryToDecimal(binaryNumber) {
  return parseInt(binaryNumber, 2)
}

// convert from string to decimal

function stringToBinary(string) {
  let binary = ''
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i)

    // converts each character's Unicode code point to an 8-bit binary representation and ensures that it is padded with zeros on the left if necessary

    binary += charCode.toString(2).padStart(8, '0')
  }
  return binary
}

// check for the conversion type

const convert = () => {
  const conversionType = conversionSelect.value
  const userInput = input.value
  let result = ''

  switch (conversionType) {
    case 'decimal':
      result = decimalToBinary(userInput)
      break

    case 'binary':
      result = binaryToDecimal(userInput)
      break

    case 'string':
      result = stringToBinary(userInput)
      break

    default:
      result = 'Invalid conversion type'
  }
  output.textContent = result
}

btn.addEventListener('click', convert)
