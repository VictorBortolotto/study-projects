const sendResponse = (statusCode, statusMessage, info, res) => {
    res.statusCode = statusCode;
    res.statusMessage = statusMessage;
    let responseBody = buildResponseBody(statusCode, info, res)
    res.send(JSON.parse(responseBody));
}

const buildResponseBody = (statusCode,info,res) => {
    let responseBody = '';
    if(statusCode == 500){
        responseBody = `{"statusCode": ${res.statusCode}, "message": "${res.statusMessage}", "err": "${info}"}`;
    }else if(statusCode == 400 || statusCode == 404){
        responseBody = `{"statusCode": ${res.statusCode}, "message": "${res.statusMessage}", "info": "${info}"}`;
    }else{
        responseBody = `{"statusCode": ${res.statusCode}, "message": "${res.statusMessage}", "obj": ${JSON.stringify(info)}}`;
    }

    return responseBody;
}

module.exports = {
    sendResponse
}