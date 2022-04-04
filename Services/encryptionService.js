const userService = require('./userService');
const bcrypt = require('bcryptjs');

class EncryptionService
{
encrypting(passwor)
{
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(10, async function (err, Salt) {
            bcrypt.hash(passwor, Salt, async function (err, hash) {
              if (err) 
              {
                  return console.log('Cannot encrypt');
              }
              resolve(hash);
          })
      })
    }) 
}
}
module.exports = new EncryptionService();