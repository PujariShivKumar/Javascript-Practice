// Problem statement 
// arr = [1,2,3,4,5,6,8,5,7,8] n=4
// if we will check sum of 4 concecutive digits
// answer - 28

// number of times loop iterates = 10 - 4 + 1 

let arr = [1,2,3,4,5,6,8,5,7,8];

function LargestSumOfConcecutiveDigits(arr,n){
    if (arr.length < n)
    {
        throw new Error("Number is greater than list");
    }
    let max = 0;
    for (let i=0; i<arr.length - n + 1; i++){
        let temp = 0; 
        for (let j=0; j<n; j++){
            temp += arr[i + j];
        }
        if (temp > max){
            max = temp;
        }
    }
    return max;
}

const result = LargestSumOfConcecutiveDigits(arr,3);
console.log(result)