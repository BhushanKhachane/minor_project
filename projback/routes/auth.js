var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");


router.post(
    "/signup",
    [
        check ("name", "Name should be at least 3 char").isLength({ min: 3 }),
        check ("email", "email is requird").isEmail(),
        check ("password", "password is at least 3 char").isLength({min: 3})
    ],
    signup
); 

router.post(
    "/signin",
    [
        check ("email", "email is requird").isEmail(),
        check ("password", "password field is requirg").isLength({min: 1})
    ],
    signin
); 


router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
    res.json(req.auth);
});

module.exports = router;