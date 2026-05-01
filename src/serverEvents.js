const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/events") {
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive"
        });

        const interval = setInterval(() => {
            res.write(`data: ${new Date().toISOString()}\n\n`);
        }, 2000); // Keep the connection alive

        req.on("close", () => {
            clearInterval(interval);
            res.end();
        });
    }
    else {
        res.writeHead(200);
        res.end("Server-Sent Events server is running!");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});