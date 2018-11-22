const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is Required']
        },
        phone: {
            type: Number,
        },
        email: {
            type: String,
            // required: true,
            trim: true,
            minlength: 1,
            validate: {
                validator: validator.isEmail,
                message: "{VALUE} is not a valid email"
            },
            lowercase: true
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        active: Boolean
    }, {
        timestamps: true,
        versionKey: false
    }
);

UserSchema.pre('save', function (next) {
    if (!!this.password) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    return next(err);
                }
                this.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});


var User = mongoose.model("User", UserSchema);


module.exports = {
    User
};
