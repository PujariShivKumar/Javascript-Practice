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

// arr1 = [1,2,3,4] arr2 = [1,4,9,16] 
// map1 = {1:1, 2:1, 3:1, 4:1 }
// map2 = {1:1, 4:1, 9:1, 16:1}
// compare 


function OptimisedVersion(arr1,arr2){
    let map1 = {};
    let map2 = {};

    for (let i=0; i<arr1.length; i++){
        map1[arr1[i]] = (map1[arr1[i]] || 0) + 1;
    }    

    for(let i=0; i<arr2.length; i++){
        map2[arr2[i]] = (map2[arr2[i]] || 0) + 1;
    }

    for(let key in map1){
        if(!map2[key * key]){
            return false;
        }

        if(map1[key] !== map2[key * key]){
            return false;
        }
    }
    return true;
}


//const result = CheckSquareElementsofAnotherArray(arr1,arr2);
const result = OptimisedVersion(arr1,arr2);
console.log(result)