var mysql = require('mysql')

var connMysql =  function() {
    let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portal_noticias'});

    connection.connect(function(err){if(err) throw err; });

    return connection;
}

module.exports = function(){
    return connMysql;
}
  