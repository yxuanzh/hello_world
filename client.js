var http = require("http");

var options = {
    host: '98.142.131.101',
    port: '8080',
    path: 'index.html'
};

var callback= function (response) {
    var body = '';
    response.on('data',
        function(data){
            body+=data;
        });
    response.on('end',function (){
        console.log(body);
    });
};

var request = http.request(options,callback);
request.end();

