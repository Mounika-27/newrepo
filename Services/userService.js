const bcrypt = require('bcryptjs');
const usersdata = {};

class userService
{
registration(data) 
{
    let key = data.email;
    usersdata[key]=data;
    console.log(usersdata);
}

authentication(data)
{
  return new Promise((resolve,reject)=>{
    let x = usersdata[data.email];
    let pwd = data.password;
    let hash = x.password;

    bcrypt.compare(pwd, hash, function (err, result) {
        if (result) {
          console.log("Authenticated user")
          resolve(1);
        }
        else {
          resolve(0);
          console.log("Not an Authenticated user");
        }
      });
  })
}

retrieve(data)
{
    let particular_user = usersdata[data];
    // for (var i in particular_user)   // i here stores keys 
    // {
    //   if(i=='password')
    //   {
    //     delete particular_user[i]   // deleting the key names password 
    //   }
    // } 
    delete particular_user.password
    return particular_user;
}

updateuser(datafromparam, datafrombody)
{
    let particular_user =  usersdata[datafromparam];
    if('name' in datafrombody)
    particular_user['name'] = datafrombody['name']
    if('age' in datafrombody)
    particular_user['age'] = datafrombody['age']
    if('phoneno' in datafrombody)
    particular_user['phoneno'] = datafrombody['phoneno']

    return particular_user;
}
}
module.exports = new userService();



