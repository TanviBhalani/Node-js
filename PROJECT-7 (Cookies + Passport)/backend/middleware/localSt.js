const passport = require("passport")
const localSt = require("passport-local")
const schema = require("../model/firstSchema")

passport.use("localSt", new localSt(
    {usernameField : "name"},
    async (name , password, done)=> {
        let admin = await schema.findOne({name})
        if(admin){
            if(admin.password == password){
                return done(null,admin)
            }
            else{
              return done(null, false)
            }
        }else{
            return done(null, false)
        }
    }
))



passport.serializeUser((admin,done) => {
    done(null,admin.id)
})



passport.deserializeUser(async(adminId , done) => {
    let admin = await schema.findById(adminId)
    if(admin){
        done(null,admin)
    }
    else{
        console.log("admin not found")
    }
})


passport.checkAuth = (req,res,next) => {
    if(req.isAuthenticated()){
        next()
    }
    else{
        res.redirect("/")
    }
}

module.exports = passport