// Problem statement - Binary search
// arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17] search for num=6


// uses divide and conquer technique
// min = 0 , max = arr.lenth - 1
// mid = (min + max)/2
// if ( mid == num ) return mid
// if ( num > mid ) then min = mid else max = mid 

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

function BinarySearch(arr,num){
    let min = 0
    let max = arr.length -1
    
    while(min <= max){
        let mid = Math.floor((min + max) / 2);
        if (arr[mid] < num){
            min = mid + 1
        }
        else if (arr[mid] > num){
            max = mid - 1
        }
        else
        {
            return mid + 1;
        }
    }
    return -1;
}

const result = BinarySearch(arr,16)
console.log("element is at " + result);