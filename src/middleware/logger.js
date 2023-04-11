const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    res.on("finish", function() {
      console.log(req.method, res.statusCode, res.statusMessage);
    });
    next();
  }

export {logger};