function log(req, res, next){
    console.log('Método', req.method)
    console.log('Path', req.path);
    console.log('Body', req.body);
    console.log('Params', req.params);

    next();
}

module.exports = log;