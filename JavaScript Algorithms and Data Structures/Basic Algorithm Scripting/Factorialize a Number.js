function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        return num = num * factorialize(num - 1);
    }
}

factorialize(5);
console.log(factorialize(5));