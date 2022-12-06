const URL = "https://jsonplaceholder.typicode.com";

// fetch(`${URL}/posts`)
//     .then( function(res){
//         if(res.ok){
//             return res.json();
//         } else{
//             throw new Error("something went wrong!!");
//         }
//     })
//     .then(function(data){
//         if(data){
//             console.log(data);
//             return data[0];
//         }
//     })
//     .then(function(post){
//         console.log(post);
//     })
//     .catch(function(err){
//         console.log("im catch");
//         console.log(err.message);
//     })

// fetch(`${URL}/posts`)
//     .then(function(res){
//         if(!res.ok) throw new Error("something went wrong!!");
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log("im catch block");
//         console.log(err);
//     })


// fetch(`${URL}/posts`, {
//     method: "POST",
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json;',
//     },
// })
//     .then(function(res){
//         if(!res.ok) throw new Error("something went wrong!!");

//         return res.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .then(function(){
//         return fetch(`${URL}/posts`);
//     })
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log("im catch block");
//         console.log(err);
//     })

async function getPosts(){
    const response = await fetch(`${URL}/posts`);
    const data = await response.json();
    return data;
}

getPosts().then(function(data){
    console.log(data);
})