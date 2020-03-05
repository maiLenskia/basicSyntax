function vacation(groupSize, type, dayOfWeek) {
    let price = 0;
    switch (type) {
        case "Students":
            if (dayOfWeek == 'Friday') {
                price = 8.45;
            } else if (dayOfWeek == 'Saturday') {
                price = 9.8;
            } else if (dayOfWeek == 'Sunday') {
                price = 10.46;
            }
            break;
        case "Business":
            if (dayOfWeek == 'Friday') {
                price = 10.9;
            } else if (dayOfWeek == 'Saturday') {
                price = 15.6;
            } else if (dayOfWeek == 'Sunday') {
                price = 16;
            }

            if (groupSize >= 100) {
                groupSize -= 10;
            }
            break;
        case "Regular":
            if (dayOfWeek == 'Friday') {
                price = 15;
            } else if (dayOfWeek == 'Saturday') {
                price = 20;
            } else if (dayOfWeek == 'Sunday') {
                price = 22.5;
            }
            break;
        default:
            break;
    }

    let totalPrice = groupSize * price;
    if (type == 'Students' && groupSize >= 30) {
        totalPrice *= 0.85;
    }
    if (type == 'Regular' && (groupSize >= 10 && groupSize <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
vacation(30, "Students", "Sunday")