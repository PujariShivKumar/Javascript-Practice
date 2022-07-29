// problem statement - Check Square Elements of Another Array
// arr1 = [1,2,3,4] arr2 = [1,4,9,16] 

// 2 loops

let arr1 = [1,2,3,4];
let arr2 = [1,4,16,9];

function CheckSquareElementsofAnotherArray(arr1,arr2){
    for(let i=0 ;i<arr1.length; i++){
        isSquare = false;
        for (let j =0 ; j<arr2.length; j++){
            if ((arr1[i] * arr1[i]) == arr2[j]){
                isSquare = true;
            }
            if(j == arr2.length-1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
}

const result = CheckSquareElementsofAnotherArray(arr1,arr2);
console.log(result)