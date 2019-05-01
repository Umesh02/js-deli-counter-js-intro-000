function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.indexOf(customerName) + 1} in line.`
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return `There is nobody waiting to be served!`
} else {
  personBeingServed = katzDeliLine[0]
  katzDeliLine.splice(0, 1)
  return personBeingServed
}
  
}