function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return '';
    } else {
        return str.concat(repeatStringNumTimes(str, num - 1));
    }
}

console.log(repeatStringNumTimes("abc", 3));