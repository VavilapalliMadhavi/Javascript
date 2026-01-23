
// Promises

function asynFunction(){
    return new Promise((resolve)=>{
     setTimeout(()=>{
        resolve("Data Recieved!!")
     },2000)
    })
}

asynFunction().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.error("Error:", error)
});


// Async and await


function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data received using Async/Await");
    }, 2000);
  });
}

async function getData() {
  try {
    const result = await fetchDataAsync();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();

