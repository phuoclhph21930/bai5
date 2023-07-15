var http = require('http');
var fs = require('fs');
var sv1 = 'Lưu Hữu phước \n ph21930 \n 097887667 \n phuoclh@fpt.edu.vn \n công nghệ thông tin';
fs.appendFileSync("mynewfile3.txt", '\n \nle hai yen \n ph22330 \n 09788766743 \n yenlh@fpt.edu.vn \n maketing');
console.log("\nFile Contents of file before append:",
  fs.readFileSync("mynewfile3.txt", "utf8"));
 fs.appendFile("mynewfile3.txt",  '\n \ndang mi tam \n ph29330 \n 09788763 \n yenlh@fpt.edu.vn \n do hoa', (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after append:",
      fs.readFileSync("mynewfile3.txt", "utf8"));
  }
  });
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  if(req.url=='/createfile'){
    fs.writeFile('mynewfile3.txt', 'Lưu Hữu phước \n ph21930 \n 097887667 \n phuoclh@fpt.edu.vn \n công nghệ thông tin', function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.write('Da tao file');
        res.end();
      });
  }
}).listen(8085);