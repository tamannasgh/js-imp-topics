const URL = "https://api.kanye.rest";

fetch(URL)
    .then( function(res){
        if(!res.ok) throw new Error("something went wrong!!");

        return res.json();
    })
    .then(function(data){
        console.log(data);
    })