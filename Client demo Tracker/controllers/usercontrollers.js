  const { Request, Response } = "express";
  const loginService = require("../services/loginService");

  const UserController = {
    /**
     * The below function is used for login functionality
     */
    async loginUser(req, res) {
      try {
        let { email, password } = req.body;
        const userData = {
          email,
          password,
        };
        await loginService.signinService(userData).then((data) => {
          if(data) {
            res.status(200).send(data)
          }else{
            res.status(400).send("Username or Password is incorrect")
          }
       
        }); 
      } catch (error) {
        res.status(400).send("Unexpected error occured")
      }
    },
  };

  module.exports = UserController;
