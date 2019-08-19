class Email {
    
    set initAuth(initAuth) {
        this._initAuth = initAuth;
    }

    get initAuth() {
        if(this._initAuth) {
            return this._initAuth;
        }else {
            return require('./initEmail').initAuth;
        }
    }

    set initMailOption(initMailOption) {
        this._initMailOption = initMailOption;
    }

    get initMailOption() {
        if(this._initMailOption) {
            return this._initMailOption;
        }else {
            return require('./initEmail').initMailOption
        }
    }

    get Transporter() {
        const { user, pass } = this.initAuth
        const nodemailer = require('nodemailer');
        const Transporter = nodemailer.createTransport({
            service : 'gmail',
            auth: { user, pass }
        });
        return Transporter;
    }

    sendEmail() {
        return new Promise((resolve, reject) => {
            this.Transporter.sendMail(this._initMailOption, function(error, info) {
                if(error) {
                    reject(error);
                }else {
                    resolve('email sent: ' + info.response)
                }
            });
        })
    }
}


module.exports = Email;