// Bubblesort

// Bubble Sort repeatedly compares two adjacent elements and swaps them if they are in the wrong order.
// With each pass, the largest element “bubbles up” to the end of the array.
// This process continues until the array becomes fully sorted.

a = [6,2,3,4,5,1]

function sortingArray(a){
for(let i=0;i<a.length;i++){
 for(let j=0; j<a.length - i-1;j++){
if(a[j] > a[j+1]){
let temp = a[j];
a[j]=a[j+1]
a[j+1] = temp;
}
 }
}
return a;
}

console.log(sortingArray(a));