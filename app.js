const getTodo = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange",() => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined,data);
        }
        else if(request.readyState === 4){
            callback("Unable to fetch data",undefined);
        }
    });

    request.open("GET", resource);
    request.send();
}

//Callback Hell
getTodo("todos/luigi.json",(err,data) => {
    console.log(data);
    getTodo("todos/mario.json", (err,data) =>{
        console.log(data)
        getTodo("/todos/shaun.json",() =>{
            console.log(data);
        })
    })
});
//Promise..
const doSomething = () =>{
    return new Promise((resolve,reject) => {
        //fetch data
        //resolve("some data");
        reject("some error");
    });
}
// doSomething().then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// });
doSomething()
 .then(data => console.log(data))
  .catch(err => console.log(err));

