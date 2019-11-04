const db = require("../models");
const crypto = require("crypto");
module.exports = {
    genRandomString: length => {
        //makes the hash salt
        return crypto
          .randomBytes(Math.ceil(length / 2))
          .toString("hex") /** convert to hexadecimal format */
          .slice(0, length); /** return required number of characters */
      },
    sha512: (password, salt) => {
        let hash = crypto.createHmac(
          "sha512",
          salt
        ); /** Hashing algorithm sha512 */
        hash.update(password.toString());
        let value = hash.digest("hex");
        return {
          salt: salt,
          passwordHash: value
        };
    },
    addUser: async(username, password, callback) =>{
        let Salt = genRandomString(16); /** Gives us salt of length 16 */
        let newUser = {
            username,
            password,
            passwordData: sha512(this.password, Salt),
            userSalt: Salt
        };
        try{
            let result = await db.Users.create(newUser);
            result ? callback(result) : callback("404"); 

        } catch{
            callback("504");
        }
    },
    loginUser: async(username, password, callback) =>{
        try{
            let foundUser = await db.Users.find({userName: username});
            if(foundUser){
                let passwordConfirm = sha512(password, foundUser.salt);
                if(passwordConfirm === foundUser.password){
                    let userData = {
                        userName: foundUser.userName,
                        id: foundUser.id
                    }
                    callback(foundUser);
                }else {
                    callback("401");
                }
            } else {
                callback("504");
            }
        } catch {
            callback("500");
        }
    }
}