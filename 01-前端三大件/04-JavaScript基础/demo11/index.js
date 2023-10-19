for (let i = 1; i <= 9; i++) {
  var chart = ''
  for (let j = 1; j <= i; j++) {
    chart += `${j}*${i}=${j * i} \t`
  }
  console.log(chart)
}
