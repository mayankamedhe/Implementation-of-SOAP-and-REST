const soap = require("soap");
const express = require("express");

const wsdlPath = "/home/oscar/cmpt431/assignment2/wsdl.xml";

const PORT = 16540;

var wsdlXml = require('fs').readFileSync(wsdlPath, 'utf8');

var soapService = {
    assignment: {
        assignment_0: {
            clockSync_ms: function()
            {
                console.log("clockSync_ms call");

                var ms = (new Date).getTime();
                return JSON.stringify(ms);
            }
        }
    }
};

var server = express();

server.get('/', function (req, res) {
  res.send('Hello World');
});

server.listen(PORT, () => console.log(`Server starting on port ${PORT}!`));
soap.listen(server, "/wsdl", soapService, wsdlXml);