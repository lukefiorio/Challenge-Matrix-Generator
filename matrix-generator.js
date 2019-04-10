function matrixGenerator(rows, columns) {
  // do work here
  function numericSort(a, b) {
    return a - b;
  }

  let outerArr = [];
  for (let i = 0; i < rows; i++) {
    let innerArr = [];

    for (let j = 0; j < columns; j++) {
      let nextVal = Math.floor(Math.random() * 100) + 1;
      innerArr.push(nextVal);
    }
    innerArr.sort(numericSort);
    outerArr.push(innerArr);
  }

  outerArr.sort(function (a, b) {
    return a[0] - b[0];
  })

  return outerArr;
}

module.exports = matrixGenerator;