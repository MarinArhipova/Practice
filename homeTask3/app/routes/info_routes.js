<!--module.exports = function(app, fs) {
    app.get('/HowZakazat', (req, res) => {
        var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    fs.appendFile('data.txt', query['lastName'] + ' ' + query['firstName'] + ' ' + query['phoneNumber'] + ' ' + query['progrPit'] + ' ' + query['exampleInputCity']+ ' ' + query['exampleInputStreet']+ ' ' + query['exampleInputHouse']+ ' ' + query['exampleInputStreetFlat'],
        function (err) {
            if (err) throw err;
            console.log('Saved!');
            res.redirect("/html/Page1.html");
        });
});
}; -->

