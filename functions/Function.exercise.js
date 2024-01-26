// make a line
function makeLine(size) {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += '#';
  }
  return line;
}
// console.log(makeLine(5));

// make rectangle
function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0, -1);
}
// console.log(makeRectangle(5,4));
// make triangle
function makeDownwardStairs(height) {
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i+1) + '\n');
  }
  return stairs.slice(0, -1);
}
// console.log(make)
// make isoscelestriangle
function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}

function makeDiamond(height) {
  let diamond = '';
  
  // Top half of the diamond
  for (let i = 0; i < height; i++) {
    diamond += (makeLine(height - i - 1, 2 * i + 1) + '\n');
  }

  // Bottom half of the diamond (excluding the center line if height is odd)
  for (let i = height - 2; i >= 0; i--) {
    diamond += (makeLine(height - i - 1, 2 * i + 1) + '\n');
  }

  return diamond.slice(0, -1);
}
console.log(makeDiamond(8));


function printDiamond(height) {
  if (height % 2 === 0) {
    height++; // Make sure the height is an odd number for a symmetric diamond
  }

  for (let i = 1; i <= height; i += 2) {
    const spaces = ' '.repeat((height - i) / 2);
    const stars = '*'.repeat(i);
    console.log(spaces + stars);
  }

  for (let i = height - 2; i >= 1; i -= 2) {
    const spaces = ' '.repeat((height - i) / 2);
    const stars = '*'.repeat(i);
    console.log(spaces + stars);
  }
}

// Example: Print a diamond with a height of 5
printDiamond(5);
