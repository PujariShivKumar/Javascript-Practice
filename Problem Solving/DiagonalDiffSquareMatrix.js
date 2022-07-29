// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17
// Their absolute difference is |15-17|=2.

var myMatrix = [[1,2,3],[4,5,6],[9,8,9]]

function diagonalDifference(arr) {
    // Write your code here
    
    let diagonal1 = 0;
    let diagonal2 = 0;
    let diff = 0;
    
    for (let i=0; i<arr.length; i++){
      diagonal1 += arr[i][i]; 
    }
    
    for(let i=0,j=arr.length - 1; i<arr.length ;i++,j--)
    {
        diagonal2 += arr[i][j]
    }
    
    diff = diagonal1 - diagonal2;
    if(diff < 0){
        diff = diff * (-1);
    }
    
    return diff;
    
}

console.log(diagonalDifference(myMatrix))