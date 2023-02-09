// 1. plan
// 2. record
// 3. edit
// 4. upload
// 5. share


function plan(topic){
    return new Promise(function(resolve, reject){
        setTimeout(() => {

            console.log("got the idea, planning...", topic);
            resolve(topic);

        }, 200);
    });
}

function record(plan){
    return new Promise(function(resolve, reject){
        setTimeout(() => {

            console.log("got the plan, recording...", plan);
            resolve(plan);

        }, 200);
    });
}

function edit(recording){
    return new Promise( function(resolve, reject){
        setTimeout(() => {

            console.log("got the recording, editing...", recording);
            resolve(recording);
            // reject(new Error("some error occured"));

        }, 200);
    });
}

function upload(editedVideo){
    return new Promise( function(resolve, reject){
        setTimeout(() => {

            console.log("got the edited video, uploading...", editedVideo);
            const statusOfVideo = `${editedVideo} uploaded successfully!`; 
            resolve(statusOfVideo);
            
        }, 100);
    });
}

function share(statusOfVideo){
    console.log("from share function", statusOfVideo);
}



plan("async js video")
    .then( record )
    .then( edit )
    .then( upload )
    .then( share )
    .catch(function(err){
        console.log(err);
    });