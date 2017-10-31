var util = require('util');
var exec = require('child_process').exec;

var command = 'curl https://api.transmitsms.com/send-sms.json \
-u ae559db613f7b722e21c7b1108037c46:secret \
-d "message=Hi Shiyas." \
-d to=61432827735'

child = exec(command, function(error, stdout, stderr){

console.log('stdout: ' + stdout);
console.log('stderr: ' + stderr);

if(error !== null)
{
    console.log('exec error: ' + error);
}

});


