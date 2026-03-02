const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,content) {
    console.log(content);
});