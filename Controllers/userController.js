const userService = require('../Services/userService');

class userController {
    retrievedata(req, res) {
        try {
            //console.log(req.params); == {id:'pavanacc.com'} , if req.params.id == 'pavanacc.com'
            console.log(req.params.id);
            let retrievedddata = userService.retrieve(req.params.id);
            //console.log("retrievedata:",retrievedata);
            res.json(retrievedddata);
        }
        catch (error) {
            console.log(error);
            res.json({ message: 'Unable to retrieve' });
        }
    }
    updatedata(req, res) {
        try {
            let updateddata = userService.updateuser(req.params.id, req.body);
            res.json(updateddata);
        }
        catch (error) {
            console.log(error);
            res.json({ message: 'Unable to update users data' });
        }
    }
}
module.exports = new userController();