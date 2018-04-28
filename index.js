const express = require('express');
const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.send('Boom World!');
});

app.listen(app.get('port'), () =>
  console.log('Bomb app running at :' + app.get('port'))
);
