// Debounce 

// Debounce is a technique used to delay executing a function until a certain amount of time has passed since the last time it was called.

// If you debounce an API call while typing in search input:

// user types: e en ent enta ...

// instead of calling API for every keystroke ✅❌✅❌

// debounce waits (say 300ms) and calls API only once after typing stops


const search = (query)=>{
console.log(`searching for..`,query)
}

function debounce(fn,delay){
let timerId;

return (...args)=>{
    clearTimeout(timerId);
    timerId = setTimeout(()=>{
    fn(...args)
    },delay)
}
}

let searchWithDebounce = debounce(search,1000);


searchWithDebounce('hy');
searchWithDebounce('hy hi');
searchWithDebounce('hy hiee');
searchWithDebounce('hy hiee i');