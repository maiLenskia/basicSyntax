function spice(startYield) {
    let totalAmount = 0;
    let days = 0;
    let consumerByWorkers = 26;
    let dropYield = 10;

    while (startYield >= 100) {
        totalAmount += startYield - consumerByWorkers;
        startYield -= dropYield;
        days++;
    }
    if (totalAmount >= 26) {
        totalAmount -= 26;
    }
    console.log(days)
    console.log(totalAmount)
}
spice(111)