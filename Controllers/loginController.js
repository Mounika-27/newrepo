const userService = require('../Services/userService');

class loginController
{
async logging_in(req,res)// function named registering
{
    try
    {
        let userexists =  await userService.authentication(req.body);  
        if(userexists)
            res.json({ message: 'authentication done for the existed user' });
        else
        {
            res.json({message:'user with given credentials doesnt exist'});
        }    
    }
   
    catch(error)
    {
        console.log(error);
        res.json({ message: 'Unable to perform Authentication' });
    } 
}
}

module.exports = new loginController();