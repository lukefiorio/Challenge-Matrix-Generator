function matrixGenerator(rows, columns) {
  // do work here
  let outerArr = [];
  let outerFirstInnerArr = [];
  for (let i = 0; i < rows; i++) {
    let innerArr = [];

    for (let j = 0; j < columns; j++) {
      let nextVal = Math.floor(Math.random() * 101);
      let index = 0;
      // insertion sort
      if (innerArr.length > 0) {
        while (nextVal > innerArr[index]) {
          index++;
        }
      }
      innerArr.splice(index, 0, nextVal);
    }
    let nextFirstInner = innerArr[0];
    let nextIndex = 0;
    if (outerFirstInnerArr.length > 0) {
      while (nextFirstInner > outerFirstInnerArr[nextIndex]) {
        nextIndex++;
      }
    }
    outerFirstInnerArr.splice(nextIndex, 0, nextFirstInner);
    outerArr.splice(nextIndex, 0, innerArr);
  }

  return outerArr;
}

module.exports = matrixGenerator;