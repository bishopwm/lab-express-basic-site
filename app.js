const express = require('express')
const app = express();

// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
  });

app.get('/bio', (request, response, next) => {
    response.sendFile(__dirname + '/views/bio.html')
  });
  
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html')
  });
   
  // Server Started
  app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  });