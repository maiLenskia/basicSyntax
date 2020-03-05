function biggest(num, secondNum, thirdNum) {
    if (num > secondNum && num > thirdNum) {
        console.log(num)
    } else if (secondNum > num && secondNum > thirdNum) {
        console.log(secondNum)
    } else if (thirdNum > num && thirdNum > secondNum) {
        console.log(thirdNum)
    }
}
biggest(99, 5,130)