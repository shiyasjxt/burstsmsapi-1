var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var exec = require('child_process').exec;

var access_token = 'R_5026d90aeaec4867b0d2ee0cb712dcf5';

var BitlyAPI = require("node-bitlyapi");
var Bitly = new BitlyAPI({
	client_id: "cmshiyas",
	client_secret: access_token	
});


// Bitly.authenticate('cmshiyas', 'Wipro@123', function(err, access_token) {
// 	// Returns an error if there was one, or an access_token if there wasn't 
// });

Bitly.setAccessToken('Y21zaGl5YXM6Ul81MDI2ZDkwYWVhZWM0ODY3YjBkMmVlMGNiNzEyZGNmNQ');



Bitly.shorten({longUrl:"https://github.com/nkirby/node-bitlyapi"}, function(err, results) {
    // Do something with your new, shorter url...
    console.log(results);

});



var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }

});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        console.log(fields);
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('Your message is successfully send!!\n\n');
        var message = fields.message;
        var phoneNumber = fields.phone;

        var apiKey = "ae559db613f7b722e21c7b1108037c46";

        var login = "cmshiyas";  
        var long_url = "www.cmshiyas.com";         
               
        
        var command = `curl https://api.transmitsms.com/send-sms.json \
        -u ${apiKey}:secret \
        -d "message=${message}" \
        -d to=${phoneNumber}`;





        // child = exec(command, function(error, stdout, stderr){
            
        //     console.log('stdout: ' + stdout);
        //     console.log('stderr: ' + stderr);
            
        //     if(error !== null)
        //     {
        //         console.log('exec error: ' + error);
        //     }
            
        //     });
        
        res.end(
        `Send Message is:${message}`
    );


    });

 

    
 
    
    
}

server.listen(1185);
console.log("server listening on 1185");