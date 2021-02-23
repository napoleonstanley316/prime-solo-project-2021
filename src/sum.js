function sum(num1, num2) {

    if (!num1) {
        num1= 0
    } else if (!num2) {
        num2 = 0
    }

    return Number(num1) + Number(num2)

}

export default sum;