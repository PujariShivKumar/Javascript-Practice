// Problem Statement
// example 'hello' -> 'llhoe' isAnagram - yes
// example 'shiv' -> 'higv' isAnagram - no

// checks
// length equal
// number of times each letter in string

// time complexity is 0(n) i.e. Linear
const isAnagram = (string1,string2) =>{
    if (string1.length != string2.length){
        return false;
    }

    counter = {}
    
    for (let letter of string1){
        counter[letter] = (counter[letter] || 0) + 1
    }

    for (let letter of string2){
        if(!counter[letter]){
            return false;
        }

        counter[letter]-=1
    }

    return true;

}

const check = isAnagram('hello', 'lleho')
console.log(check)
