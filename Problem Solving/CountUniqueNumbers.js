// Problem Statement - Find count of unique numbers
// arr = [1,1,2,2,3,3,4,4,5,5,5,6,6,7,8,8]
// answer - 8
// array must be sorted

let arr = [1,1,2,2,3,3,4,4,5,5,5,6,6,7,8,8]

function CountUniqueNumbers(arr){
    if(arr.length>0){
        let i = 0;

    for (let j=1 ; j < arr.length ; j++){
        if (arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
    }
    else{
        throw new Error("Array is empty")
    }
}

const count = CountUniqueNumbers(arr);
console.log(count);