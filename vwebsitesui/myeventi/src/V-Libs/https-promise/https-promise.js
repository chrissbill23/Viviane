const https = require('https');
function requestPromise(options, data) {
    var responseString = "";
    var esci = false;alert(JSON.stringify(options));
        var req = https.request(options, (res) => {
            res.setEncoding('utf8');
            res.on("data", (data) => {
                responseString += data;
                // save all the data from response
            });
            res.on("end", () => {
                esci = true;
            });
            res.on('error', (err)=>{
                esci = true;
            })
        });
        req.write(JSON.stringify(data));
        req.end();
}
export default requestPromise;