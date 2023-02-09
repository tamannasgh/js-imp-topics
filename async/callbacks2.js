// 1. plan
// 2. record
// 3. edit
// 4. upload
// 5. share

function plan(topic, callback) {

    setTimeout(() => {

        const plan = `${topic}`;
        callback(plan);

    }, 200);

}

function record(plan, callback){

    setTimeout(() => {
      
        const recording = `${plan}`;
        callback(recording);

    }, 300);

}

function edit(recording, callback) {

    setTimeout(() => {
        
        const editedVideo = `${recording}`;
        callback(editedVideo);

    }, 400);

}

function upload(editedVideo, callback){

    setTimeout(() => {
        
        const status = `${editedVideo} uplaoded successfully`;
        callback(status);

    }, 200);

}


function share(status){
    const message = `${status}, have a look!`;
    console.log(message);
}

plan("callbacks", function(plan){
    record(plan, function(recording){
        edit(recording, function(editedVideo){
            upload(editedVideo, function(status){
                share(status);
            });
        });
    });
});

