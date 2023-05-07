const http = require('http');
const fs = require('fs');

const PORT = 3000;

const requestHandler = (request, response) => {
  const { method, url } = request;
  console.log(`Получен ${method}-запрос на ${url}`);
  fs.readFile('page.html', (err, data) => {
    if (err) return console.error(err.message);
    response.write(data.toString());
    response.end('<div style="font-size: 3rem; color: #00ff00">!!!</div>');
  });
};

const server = http.createServer(requestHandler);

server.listen(PORT, 'localhost', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
