function getPower(num, degree) {
    let result = num;
    if (degree === 1) {
        result=num;
    } else {
        result = result * getPower(result, degree-1);
    }
    return result;
}
 console.log(getPower(2,5));
 console.log(getPower(3,3));
 console.log(getPower(5,3));