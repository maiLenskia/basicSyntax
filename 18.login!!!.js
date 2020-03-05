function login(input) {
    let userName = input[0]

    let reversedUserName = '';
    for (let i = userName.lenght - 1; i >= 0; i--) {
        reversedUserName += userName[i];
    }

    for (let index = 1; index < input.length; index++) {
        if (input[index] !== reversedUserName) {
            if (index === 4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${userName} logged in.`);
            break;
        }
        
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny'])