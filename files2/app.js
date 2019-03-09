var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/file.txt", {
  encoding: "utf8",
  highWaterMark: 32 * 1024
});

var writable = fs.createWriteStream(__dirname + "/fileCopy.txt");

readable.on("data", function(chunk) {
  console.log(chunk.length);
  writable.write(chunk);
});
