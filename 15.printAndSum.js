function print(start, end) {
    let output = '';
    let sum = 0;

    for (let num = start; num <= end; num++) {
        output += `${num} `
        sum += num;
    }

    console.log(output);
    console.log(`Sum: ${sum}`)
}
print(5, 10)