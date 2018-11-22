const { msg } = require("../../../config/messages"),
    { User } = require("../models/user.model"),
    { pickUserProfileResponse, pickRegistrationData, pickRegistrationResponse, pickUserCredentials, pickSociailAccountCredentials } = require("../../../helpers/pickResponse.helper"),
    { compare } = require("bcrypt"),
    { generateAuthToken } = require("../../../util/generate.token"),
    { socialloginResonse } = require("../../../helpers/commonResponse.helper");
nodemailer = require('nodemailer')

// registration
const registration = async (req, res) => {
    req.body.active = false;
    let body = req.body;
    let userExist = await User.findOne({ email: body.email });
    // if (userExist) {
    //     throw msg.duplicateEmail;
    // }
    let user = new User(body);
    sendMail(req, res);
    let response = await user.save();
    if (response) return {
        result: pickRegistrationResponse(response),
        status: 200,
        message: msg.userRegistered
    };
};


// login
const login = async (data) => {
    var body = pickUserCredentials(data);

    let user = await User.findOne({ email: body.email })
    if (!user) {
        throw msg.userNotFound;
    }
    if (!user.password) {
        throw msg.passworNotSet
    }
    let verifiedPassword = await compare(body.password, user.password)

    if (!verifiedPassword) {
        throw msg.invalidCredentials
    } else {
        return {
            result: pickUserProfileResponse(user),
            status: 200,
            token: await generateAuthToken(user),
            message: msg.loggedIn
        };
    }
}

const verify = async (req, res) => {
    if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
        if (req.query.id == rand) {
            return {
                result: 'Domain is matched. Information is from authentic email'
            }
        }
        else {
            throw 'bad request'
        }
    }
    else {
        throw 'bad request'
    }
}


const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "aman@parangat.com",
        pass: "demo@1234"
    }
});
var rand, mailOptions, host, link;


sendMail = (req, res) => {
    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');
    link = "http://" + req.get('host') + "/verify?id=" + rand;
    mailOptions = {
        to: req.body.email,
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
}


module.exports = {
    registration,
    login,
    verify
};
