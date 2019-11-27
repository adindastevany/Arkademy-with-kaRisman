const http = require('http');

const server = http.createServer((request, response)=>{
    const data = {
        name: 'adinda',
        age: 16,
    };
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.write(JSON.stringify(data));
    response.end();
});

server.listen(3000);

console.log('Server is running on port 3000');

//askses server => hostname:portno