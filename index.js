// server.js
import http from "http";
import fs from "fs";

// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header with status code and content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Send a response body
  res.end("Hello, World!");
});

// create a file named "welcome.txt" containing one line "Hello Node".

fs.writeFileSync("welcome.txt", "Hello Node", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File created successfully");
});

// create a program that reads and console.log data from hello.txt

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
