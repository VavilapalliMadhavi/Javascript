
//string reverse
function reverseString(a){
     const reversed = a.split('').reverse().join('');
     return reversed;
}

console.log(reverseString('Hello World'));


//array reverse

function reverseArray(a){
     const reversed = a.reverse();
     return reversed;
}

console.log(reverseArray([1,2,3,4,5,6]));