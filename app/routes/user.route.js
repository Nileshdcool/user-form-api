module.exports = app => {
    const user = require("../controller/user.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user.signUp);
  
    app.use('/api/users', router);
  };