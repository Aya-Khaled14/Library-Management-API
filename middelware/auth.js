//function work before request reach contoller
// to make our AP secure 
// only athunticated users can pass from middlware
const jwt = require ('jsonwebtoken')
module.exports = (req,res,next) =>{
    // dissolve token and see it can pass ot not
    try { 
        //get token from a auhtorixation header
        const fullToken = req.headers.authorization
        //split it from bearer word
        const token = fullToken?.split(' ')[1]
        //if token not exsit  send errir
        if (!token) res.status(400).send("Access Denied As No token proviedd")
        //dissolve by secert word which exsit in login contoller
        const decodedToken = jwt.verify(token,'secret' )
        //the user info of this request is {data from token}
        req.user = decodedToken
        //allow this user to do the requset controller by next()
        next()
    } catch (err) {
        console.log("error in token",err)
        res.status(400).send("invalid Token")
    }
}