const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = 'mySecrect'

const toHash = (password) => {
    return bcrypt.hashSync(password, 10);
}

const validate = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

const decode = (token) => {
    return jwt.decode(token);
}

const generateJwtToken = (user) => {
    return jwt.sign({info: {id: user.id, email: user.email}}, secret, {
        expiresIn: '28800s'
    })
}

const decodeJwt = (token) => {
    return jwt.decode(token);
}

module.exports = {
    toHash,
    validate,
    decode,
    generateJwtToken,
    decodeJwt
}