module.exports=function(sequelize, Datatypes){
    let User = sequelize.define("User",{
        firstName: {
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len:[1,20]
            }
        },
        lastName:{
            type:Datatypes.STRING,
            allowNull: false,
            validate:{
                len:[1,20]
            }
        },
        email:{
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len:{
                    args:[6,128],
                    msg: "Must enter valid Email address"
                },
                isEmail:{
                    msg:"Must enter a valid Email address!"
                }
            },
            unique:{
                args: true,
                msg: "This Email address is already in use!"
            }

        },
        password:{
            type:Datatypes.STRING,
            allowNull: false,
            validate:{
                len:{
                    args:[5,100]
                }
            }
        },
        
    })

    return User;
}

//String Validation not allowing Data to be posted to Database