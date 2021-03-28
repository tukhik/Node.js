module.exports = (app) => {
    app.use((req, res, next)=>{
        req.middlewareCross = 10;
        next();
    });
    app.use('/posts', require('./routes/posts'));
  //  app.use('/homework', require('./routes/homework'));
    app.use('/users', require('./routes/users'));
    app.use('/', require('./routes/index'));
};