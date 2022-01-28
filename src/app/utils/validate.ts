export function validateEAN13(code: any): boolean {
  if (code.length !== 13) return false
  const codeArray = code.split(""),
  length = codeArray.length - 1

  let oddSum = 0,
    sum = 0,
    check = 0

  for (let i = 0; i <= length; i++) {
    if (i === length) check = parseInt(codeArray[i])
    else if (Math.abs(i % 2) == 1) oddSum += parseInt(codeArray[i])
    else sum += parseInt(codeArray[i])
  }

  oddSum = oddSum * 3
  sum += oddSum

  const nextMultiple = Math.ceil(sum / 10) * 10

  return nextMultiple - sum === check
}
