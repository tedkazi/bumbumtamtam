const express = require('express');
const axios = require('axios');
const app = express();

const SUPER_SECRET_PASSWORD = 'lovethebomb69';

app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/public'));

axios.post('days.dump.hr', {
  password: SUPER_SECRET_PASSWORD
});

app.get('/', (request, response) => {
  response.send('Boom World!');
});

app.listen(app.get('port'), () =>
  console.log('Bomb app running at :' + app.get('port'))
);
