function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.indexOf(customerName) + 1} in line.`
}
