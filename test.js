const Request = require('request')

var Ping = {
    url: 'https://echo-serv.tbxnet.com/v1/system/ping',
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
  };

var Echo = {
    url: 'https://echo-serv.tbxnet.com/v1/echo?text=test',
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
  };

 Request(Ping, function (error, response, body) {
    let statusCodeOk;
    if(error){
        statusCodeOk = "Error";
        console.log("Echo test result is: " +statusCodeOk)
        return;
    }
    if(response.statusCode == 200) {
        statusCodeOk = "Okay";
    }
    console.log("Echo test result is: " +statusCodeOk)
})

Request(Echo, function (error, response, body) {
    let statusCodeOk;
    if(error){
        statusCodeOk = "Error";
        console.log("Echo test result is: " +statusCodeOk)
        return;
    }
    if(response.statusCode != 200) {
        statusCodeOk = "Error";
        console.log("Echo test result is: " +statusCodeOk)
    }

    if(response.body == '{"text":"test"}') {
        statusCodeOk = "Okay";
    }


    console.log("Echo test result is: " +statusCodeOk)
})
