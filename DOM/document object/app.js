let val;

//document properties
val=document;//entire HTML document
val=document.all; // HTML all collection not an array cant use foreach 
val=document.all[0];//first element that is html tag 
val=document.all.length; //length how many tags
val=document.head;//access head
val=document.body;
val=document.doctype;
val=document.domain
val=document.URL;
val=document.characterSet;//that is UTF-8
val=document.contentType;

val=document.forms;//has one form 
val=document.forms[0];//access first form 
val=document.forms[0].id;// show id of first form 
val=document.forms[0].method;
val=document.forms[0].action;
val=document.links;// show all links
val=document.links[0];// show first link
val=document.links[0].id;
val=document.links[0].className; //show string of class names
val=document.links[0].classList;//show list in collection not in string
val=document.links[0].classList[0];

val=document.images;
val=document.scripts;//show all scripts linked
val=document.scripts[2].getAttribute("src");//show app.js as it is third
//scripts are not iterable so convert to array then use for each to access
let scripts=document.scripts;
let scriptsArray=Array.from(scripts);
scriptsArray.forEach(function(script) {
    console.log(script.getAttribute("src"));
});


console.log(val);