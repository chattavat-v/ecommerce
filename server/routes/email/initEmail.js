var keys = require('../../config/keys')

const initAuth = {
    user: 'chattavat.psu@gmail.com',
    pass: keys.PassMail
}

const initMailOption = {
    from: 'chattavat.v@gmail.com',
    to: 'chattavat.psu@gmail.com',
    subject: 'Testing sending email using Node.JS',
    text: 'that was easy?'
}

module.exports = { initAuth, initMailOption };