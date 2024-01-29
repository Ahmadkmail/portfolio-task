export default function missingNumber (arr){
    let arrLength = arr.length;
    let lengthSum = 0, arrSum = 0;
    
    for(let i=0; i<=arrLength ; i++){
        lengthSum += i;
    }
    arrSum = arr.reduce((sum, ele) => sum + ele, 0);

    return lengthSum-arrSum
}



