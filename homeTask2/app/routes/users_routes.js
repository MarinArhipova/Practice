bodyParser = require('body-parser').json();

// описываем фунцию для обработки post-запроса на url /users
module.exports = function (app, fs) {
    app.post('/HowZakazat', bodyParser, function (request, response) {
        // вытаскиваю тело в формате JSON
        var body = request.body;
        console.log(body);
        // записываю его в файл
        fs.appendFile('data.txt', body.lastName + ' ' + body.firstName + ' ' + body.phoneNumber + ' ' + body.progrPit + ' ' + body.exampleInputCity + ' ' + body.exampleInputStreet  + ' ' + body.exampleInputHouse + ' ' + body.exampleInputStreetFlat + '\n',
            function (err) {
                if (err) throw err;
                console.log('Saved!');
                response.redirect("/html/Page1.html");
            });
    });
    app.get('/HowZakazat', function (request, response) {
        fs.readFile('data.txt', 'utf-8', function(err, data) {
            var lines = data.split('\n');

            var result = [];
            for (var i = 0; i < lines.length; i++) {
                result.push({'lastName' : lines[i].split(' ')[0],
                    'firstName': lines[i].split(' ')[1],
                    'phoneNumber': lines[i].split(' ')[2],
                    'progrPit': lines[i].split(' ')[3],
                    'exampleInputCity': lines[i].split(' ')[4],
                    'exampleInputStreet': lines[i].split(' ')[5],
                    'exampleInputHouse': lines[i].split(' ')[6],
                    'exampleInputStreetFlat': lines[i].split(' ')[7],
                });
            }
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(result));
        });
    });
};