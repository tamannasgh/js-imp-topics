// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr.response);
//     }
// }

// xhr.onload = function(){
//     const data = JSON.parse(xhr.response);
//     console.log(data); 

//     const xhr2 = new XMLHttpRequest();
//     const URL2 = `${URL}/users`

//     xhr2.onload = function(){
//         console.log(JSON.parse(xhr2.response));

//     }

//     xhr2.open("GET", URL2);
//     xhr2.send();
// }

// xhr.open("GET", `${URL}/posts`);
// xhr.send();

//if you see carefully it's again callback hell so we can use promises here right?


const URL = "https://jsonplaceholder.typicode.com";
function ajaxCall(method, URL){
    return new Promise( function(resolve, reject){
        const xhr = new XMLHttpRequest();

        xhr.onload = function(){

            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            } else{
                reject(xhr.statusText);
            }

        }

        xhr.open(method, URL);
        xhr.send();
    });
}

const req = ajaxCall("GET", `${URL}/posts`);

req.then( function(res){
    const data = JSON.parse(res);
    return data;
})
.then(function(data){
    console.log(data);
})
.catch( function(err){
    console.log(err);
})
