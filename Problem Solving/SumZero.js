// Problem statement
// A funcion will return first pair of elements whose sum is zero
var arr = [-7,-6,-4,-3,-2,0,2,5,6];

// For this Method, It is not required that elements should be in sorted order
// o(n^2) because of two for loops
function sumPairZero(array){
    for (var number of array){
        for(var i=1;i < array.length; i++){
            if(number === array[i]){
                return [number,array[i]];
            }
        }
    }
}

// For this Method, It is required that elements should be in sorted order
// time complexity is reduced to o(n) used only one loop
function sumPairZeroOptimized(array){
    let left = 0;
    let right = array.length - 1;

    while (left <= right){
        let sum = array[left] + array[right];
        if (sum === 0){
            return [array[left],array[right]];
        }
        else if(sum < 0){
            left++;
        }
        else{
            right--;
        }
    }
}

var result = sumPairZeroOptimized(arr);
console.log(result);