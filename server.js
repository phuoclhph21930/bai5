var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    if(req.url=='/page-b.html'){
        res.writeHead(301,{"Location": "http://" + req.headers['host'] + '/page-c.html'});
        return res.end();
    }else{ 
        console.log(req.url);
        fs.readFile(req.url.substring(1),
        function(err,data){
            if(err) return err;
            res.writeHead(200);
            res.write(data.toString('utf8'));
            return res.end();
            
        });
    }
  
}).listen(8080);
