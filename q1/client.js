const soap = require("soap");

const wsdlPath = "/home/oscar/cmpt431/assignment2/wsdl.xml";

soap.createClient(wsdlPath, function (err, client)
{
    if (err) throw err;

    console.log("Client created!");

    var serverTime = "";
    var timeAfter;
    var timeBefore = (new Date).getTime();

    client.clockSync_ms(function (err, result)
    {
        if (err) throw err;

        timeAfter = (new Date).getTime();

        for (var key in result)
        {
            serverTime += result[key];
        }

        serverTime = Number(serverTime);

        console.log(`Time before: ${timeBefore}`);
        console.log(`Server time: ${serverTime}`);
        console.log(`Time after: ${timeAfter}`);
        console.log();
        console.log(`Time difference: ${timeAfter - timeBefore}`);
        console.log(`Corrected time for client: ${serverTime + Math.floor((timeAfter - timeBefore)/2)}`);
    });
});