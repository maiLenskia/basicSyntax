function numbers(n1, n2, n3) {
    //let n1 = Number(input.shift());
   // let n2 = Number(input.shift());
   // let n3 = Number(input.shift());
    let biggerNum = 0;
    let smallNum = 0;
    let averageNum = 0;
    

    if (n1 > n2 && n1 > n3) {
        biggerNum += n1;
        if (n2 > n3) {
            smallNum += n3;
            averageNum += n2;
        } else {
            smallNum += n2;
            averageNum += n3;
        }
    } else if (n2 > n1 && n2 > n3) {
        biggerNum += n2;
        if (n1 > n3) {
            smallNum += n3;
            averageNum += n1;
        } else {
            smallNum += n1;
            averageNum += n3;
        }
    } else if (n3 > n1 && n3 > n2) {
        biggerNum += n3; 
        if (n1 > n2) {
            smallNum += n2;
            averageNum += n1;
        } else {
            smallNum += n1;
            averageNum += n2;
        }
    } 

    console.log(biggerNum)
    console.log(averageNum)
    console.log(smallNum)
}
numbers(2, 1, 3)
