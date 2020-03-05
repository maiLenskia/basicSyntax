function englishName(num) {
  let lastNum = Math.abs(num % 10);
  let output = '';

  if (lastNum == 2) {
      output += 'two';
      console.log(output)
  } else if (lastNum == 1) {
      output += 'one';
      console.log(output)
  } else if (lastNum == 3) {
    output += 'three';
    console.log(output)
} else if (lastNum == 4) {
    output += 'four';
    console.log(output)
} else if (lastNum == 5) {
    output += 'five';
    console.log(output)
} else if (lastNum == 6) {
    output += 'six';
    console.log(output)
} else if (lastNum == 7) {
    output += 'seven';
    console.log(output)
} else if (lastNum == 8) {
    output += 'eight';
    console.log(output)
} else if (lastNum == 9) {
    output += 'nine';
    console.log(output)
} else if (lastNum == 0) {
    output += 'zero';
    console.log(output)
}
}
englishName(2313346435)