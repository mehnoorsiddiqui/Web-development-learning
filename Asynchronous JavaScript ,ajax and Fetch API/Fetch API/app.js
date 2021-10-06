document.querySelector('#button1').addEventListener
('click',getText);
document.querySelector('#button2').addEventListener
('click',getJSON);
document.querySelector('#button3').addEventListener
('click',getExternal);
 
//Get local text file data
function getText(){
    fetch('test.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.querySelector('#output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    })
}
//Get local json data
function getJSON(){
    fetch('posts.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.querySelector('#output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}

//Get from external api
function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.querySelector('#output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}