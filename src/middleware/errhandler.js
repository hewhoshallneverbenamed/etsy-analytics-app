// error handler
const errhandler = (error,req,res,next) => {
    res.status(400);
    res.send(error.message);
    next();
}
module.exports = errhandler;