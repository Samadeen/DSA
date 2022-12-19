const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logFirstTwoBoxes() {
  console.log(boxes[0]); // 0(1)
  console.log(boxes[1]); // 0(1)
}

logFirstTwoBoxes(boxes); // 0(2) --> Constant Time
