module.exports=function(sequelize, Datatypes){
    let User = sequelize.define("User",{
        firstName: {
            type: Datatypes.STRING,
            allowNull: false,
            // validate:{
            //     len:[1]
            // }
        },
        lastName:{
            type:Datatypes.STRING,
            allowNull: false,
            // validate:{
            //     len:[1]
            // }
        },
        email:{
            type: Datatypes.STRING,
            allowNull: false,
            // validate:{
            //     len:{
            //         args:[6,128],
            //         msg: "Must enter valid Email address"
            //     },
            //     isEmail:{
            //         msg:"Must enter a valid Email address!"
            //     }
            // },
            // unique:{
            //     args: true,
            //     msg: "This Email address is already in use!"
            // }

        },
        password:{
            type:Datatypes.STRING,
            allowNull:false,
            // validate:{
            //     len: [6-20],
            //     msg:"Password must be at least 6 characters."
            // }

        }
    })

    return User;
}