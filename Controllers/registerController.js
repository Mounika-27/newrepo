const encService = require('../Services/encryptionService');
const userService = require('../Services/userService');

class registerController  // class name and file name need not be same
{
async registering(req,res)// function named registering
{
    try
    {
        let encryptedpwd = await encService.encrypting(req.body.password);  
        req.body.password = encryptedpwd;
        userService.registration(req.body);
        res.json({ message: 'User Registered Successfully' });
    }
    catch(error)
    {
        console.log(error);
        res.json({ message: 'Registration Unsuccessfully' });
    } 
}
}

module.exports = new registerController();