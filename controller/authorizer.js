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
    addUser: async(req,res) =>{
        console.log("at line 24");
        let Salt = module.exports.genRandomString(16); /** Gives us salt of length 16 */
        let hashCode = module.exports.sha512(req.body.password, Salt);
        let newUser = {
            userName: req.body.userName,
            //password: req.body.password,
            password: hashCode.passwordHash,
            salt: hashCode.salt
        };
        
        console.log(newUser);
        // try{
            let result = await db.Users.create(newUser);
            result ? res.json(result) : res.sendStatus("404"); 

        // } catch{
        //     res.sendStatus("504");
        // }
    },
    loginUser: (req,res) =>{
        try{
            db.Users.findOne({userName: req.query.userName}, (er, foundUser) => {
                if(er){console.log(er)}
                if(foundUser){
                let passwordConfirm = module.exports.sha512(req.query.password, foundUser.salt);
                    if(passwordConfirm.passwordHash === foundUser.password){
                        let userData = {
                            userName: foundUser.userName,
                            id: foundUser.id
                        }
                        res.json({userData});
                    }else {
                        res.sendStatus("401");
                    }
                } else {
                    res.sendStatus("504");
                }
            });
        } catch {
            res.sendStatus("500");
        }
    }
}