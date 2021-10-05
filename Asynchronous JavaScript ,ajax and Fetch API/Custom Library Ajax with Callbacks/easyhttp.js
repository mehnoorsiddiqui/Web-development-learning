function easyHTTP(){
    this.http = new XMLHttpRequest();

}
//Make a HTTP GET Request
easyHTTP.prototype.get = function (url,callback){
    this.http.open('GET',url,true);

    let self = this; // as the self captures this which refers to easyHTTP 
//capturing it here so that it can be used within the function

    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        }else{
            callback('Error: '+self.http.status);
        }
    }
    this.http.send();
}
//Make a HTTP POST Request
easyHTTP.prototype.post =function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;
    this.http.onload = function (){
        callback(null,self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}


//Make a HTTP PUT Request
easyHTTP.prototype.put =function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;
    this.http.onload = function (){
        callback(null,self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}
//Make a HTTP DELETE Request
easyHTTP.prototype.delete = function (url,callback){
    this.http.open('DELETE',url,true);

    let self = this; 
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,'Post deleted');
        }else{
            callback('Error: '+self.http.status);
        }
    }
    this.http.send();
}
