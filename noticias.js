var http = require('http');
http.createServer(function(teste1, teste2){
    var categoria = teste1.url;
    if(categoria == '/tecnologia'){
        teste2.end("<html><body>Notícia de tecnologia</body></html>" + categoria);    
    }else if(categoria === '/moda'){
        teste2.end("<html><body>Notícias de moda</body></html>");
    }else if(categoria === '/beleza'){
        teste2.end("<html><body>Notícias de beleza</body></html>");
    }else{
        teste2.end("<html><body>Portal de notícias</body></html>");
    }
}).listen(3001);



//console.log('Criando um site de notícias com nodeJs');