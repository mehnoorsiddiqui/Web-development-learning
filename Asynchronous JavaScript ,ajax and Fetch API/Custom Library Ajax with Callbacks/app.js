const http = new easyHTTP;

//GET Posts

// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
// if(err){
//     console.log(err);
// }else{
//     console.log(posts);
// }

// });

//GET Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
// if(err){
//     console.log(err);
// }else{
//     console.log(post);
// }

// });

//POST REQUEST

//Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a Custom post'
};

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',
//     data, function (err, post) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         }
//     });

//Update POST
// http.put('https://jsonplaceholder.typicode.com/posts/5',
//     data, function (err, post) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         }
// });

//DELETE POST

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
if(err){
    console.log(err);
}else{
    console.log(response);
}

});

