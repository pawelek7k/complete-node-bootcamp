const fs = require("fs");
const http = require("http");
const url = require("url");

// FILES
// sync
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `cos tam avodaco ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("zrobione");

//async

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("your file has been written.");
//       });
//     });
//   });
// });

//SERVER
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("overview");
  } else if (pathName === "/product") {
    res.end("product");
  } else {
    ewa.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": " hello-world",
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8000, () => {
  console.log("Listening to requests on port 8000");
});
